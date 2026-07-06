"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ================= TYPES ================= */
type ServiceKind = "3D Design" | "3D Scanning" | "3D Printing";

type Project = {
  _id: string;
  images: string[];
  serviceKind: ServiceKind;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  createdAt: string;
};

/* ================= SCHEMA ================= */
const projectSchema = z.object({
  titleEn: z.string().min(1, "English title is required"),
  titleAr: z.string().min(1, "Arabic title is required"),
  descriptionEn: z.string().min(1, "English description is required"),
  descriptionAr: z.string().min(1, "Arabic description is required"),
  images: z.any().optional(),
  serviceKind: z.enum(["3D Design", "3D Scanning", "3D Printing"]),
});

type ProjectForm = z.infer<typeof projectSchema>;

/* ================= MINI IMAGE SLIDER ================= */
function ImageSlider({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <span className="text-gray-400 text-xs">No image</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <img
        src={`http://localhost:4002/uploads/${images[0]}`}
        alt={title}
        className="w-full h-full object-cover"
      />
    );
  }

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative w-full h-full group overflow-hidden">
      {/* Image */}
      <img
        src={`http://localhost:4002/uploads/${images[current]}`}
        alt={`${title} ${current + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Prev button */}
      <button
        onClick={prev}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-1 right-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">
        {current + 1}/{images.length}
      </div>
    </div>
  );
}

/* ================= MODAL ================= */
function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Project
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ================= TAB ================= */
export default function ProjectsTab() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ProjectForm>({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch("http://localhost:4002/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  /* ---------- SUBMIT ---------- */
  const onSubmit = async (data: ProjectForm) => {
    const formData = new FormData();
    formData.append("titleEn", data.titleEn);
    formData.append("titleAr", data.titleAr);
    formData.append("descriptionEn", data.descriptionEn);
    formData.append("descriptionAr", data.descriptionAr);
    formData.append("serviceKind", data.serviceKind);

    const fileList = data.images as unknown as FileList;
    if (fileList && fileList.length > 0) {
      Array.from(fileList).forEach((file) => formData.append("images", file));
    }

    if (editingProject) {
      const res = await fetch(
        `http://localhost:4002/api/projects/${editingProject._id}`,
        { method: "PUT", body: formData }
      );
      const updated = await res.json();
      setProjects((prev) =>
        prev.map((p) => (p._id === updated._id ? updated : p))
      );
    } else {
      const res = await fetch("http://localhost:4002/api/projects", {
        method: "POST",
        body: formData,
      });
      const newProject = await res.json();
      setProjects((prev) => [newProject, ...prev]);
    }

    reset();
    setEditingProject(null);
    setOpen(false);
  };

  /* ---------- DELETE ---------- */
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    await fetch(`http://localhost:4002/api/projects/${id}`, {
      method: "DELETE",
    });
    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  /* ---------- EDIT ---------- */
  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setValue("titleEn", project.titleEn);
    setValue("titleAr", project.titleAr);
    setValue("descriptionEn", project.descriptionEn);
    setValue("descriptionAr", project.descriptionAr);
    setValue("serviceKind", project.serviceKind);
    setOpen(true);
  };

  if (loading) return <p className="text-gray-500">Loading projects...</p>;

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <button
          onClick={() => {
            reset();
            setEditingProject(null);
            setOpen(true);
          }}
          className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded shadow"
        >
          + Add Project
        </button>
      </div>

      {projects.length === 0 && (
        <p className="text-gray-500">No projects found</p>
      )}

      {/* LIST */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex flex-col md:flex-row border rounded-lg shadow-sm overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
          >
            {/* ── IMAGE SLIDER THUMBNAIL ── */}
            <div className="w-full md:w-48 h-40 md:h-auto flex-shrink-0">
              <ImageSlider images={project.images} title={project.titleEn} />
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.titleEn}
                  </h3>
                  <span className="text-xs text-gray-400 dark:text-gray-300 whitespace-nowrap shrink-0">
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h4
                  dir="rtl"
                  className="text-md font-semibold text-gray-700 dark:text-gray-200 mt-1"
                >
                  {project.titleAr}
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  {project.serviceKind}
                </p>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {project.descriptionEn}
                </p>

                <p
                  dir="rtl"
                  className="text-sm text-gray-700 dark:text-gray-300 mt-2"
                >
                  {project.descriptionAr}
                </p>

                <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                  <b>Images:</b> {project.images?.length ?? 0}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-3 items-center flex-wrap">
                <button
                  onClick={() => handleEdit(project)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-white">
              English Title
            </label>
            <input
              {...register("titleEn")}
              placeholder="English Title"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.titleEn && (
              <p className="text-red-600 text-sm">{errors.titleEn.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-white">
              Arabic Title
            </label>
            <input
              {...register("titleAr")}
              placeholder="Arabic Title"
              dir="rtl"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.titleAr && (
              <p className="text-red-600 text-sm">{errors.titleAr.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-white">
              English Description
            </label>
            <textarea
              {...register("descriptionEn")}
              rows={6}
              placeholder="English Description"
              className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.descriptionEn && (
              <p className="text-red-600 text-sm">
                {errors.descriptionEn.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-white">
              Arabic Description
            </label>
            <textarea
              {...register("descriptionAr")}
              rows={6}
              dir="rtl"
              placeholder="الوصف بالعربية"
              className="w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.descriptionAr && (
              <p className="text-red-600 text-sm">
                {errors.descriptionAr.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-white">
              Project Images{" "}
              <span className="text-gray-400 text-xs">(select multiple)</span>
            </label>
            <input
              type="file"
              multiple
              {...register("images")}
              accept="image/*"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            {editingProject && (
              <p className="text-xs text-gray-400 mt-1">
                Currently has {editingProject.images?.length ?? 0} image(s).
                Selecting new files will replace them all.
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-white">
              Service Kind
            </label>
            <select
              {...register("serviceKind")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="3D Design">3D Design</option>
              <option value="3D Scanning">3D Scanning</option>
              <option value="3D Printing">3D Printing</option>
            </select>
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            {editingProject ? "Update Project" : "Save Project"}
          </button>
        </form>
      </Modal>
    </div>
  );
}