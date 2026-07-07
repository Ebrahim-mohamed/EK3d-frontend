"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ================= TYPES ================= */
type TechnologyItem = {
  _id: string;
  image: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  createdAt: string;
};

/* ================= SCHEMA ================= */
const technologySchema = z.object({
  titleEn: z.string().min(1, "English title is required"),
  titleAr: z.string().min(1, "Arabic title is required"),
  descriptionEn: z.string().min(1, "English description is required"),
  descriptionAr: z.string().min(1, "Arabic description is required"),
  image: z.any().optional(),
});
type TechnologyForm = z.infer<typeof technologySchema>;

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
            Technology
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
export default function TechnologyTab() {
  const [technology, setTechnology] = useState<TechnologyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingTechnology, setEditingTechnology] =
    useState<TechnologyItem | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<TechnologyForm>({
    resolver: zodResolver(technologySchema),
  });

  /* 🔒 LOAD TECHNOLOGY */
  useEffect(() => {
    const loadTechnology = async () => {
      try {
        const res = await fetch("https://ek3dprints.com/api/technology");
        if (!res.ok) throw new Error("Failed to fetch technology");
        const data = await res.json();
        setTechnology(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadTechnology();
  }, []);

  /* ---------- SUBMIT ---------- */
  const onSubmit = async (data: TechnologyForm) => {
    const formData = new FormData();
    formData.append("titleEn", data.titleEn);
    formData.append("titleAr", data.titleAr);
    formData.append("descriptionEn", data.descriptionEn);
    formData.append("descriptionAr", data.descriptionAr);
    if (data.image && (data.image as unknown as FileList)[0])
      formData.append("image", (data.image as unknown as FileList)[0]);

    if (editingTechnology) {
      // Edit
      const res = await fetch(
        `https://ek3dprints.com/api/technology/${editingTechnology._id}`,
        {
          method: "PUT",
          body: formData,
        },
      );
      const updated = await res.json();
      setTechnology((prev) =>
        prev.map((n) => (n._id === updated._id ? updated : n)),
      );
    } else {
      // Add
      const res = await fetch("https://ek3dprints.com/api/technology", {
        method: "POST",
        body: formData,
      });
      const newItem = await res.json();
      setTechnology((prev) => [newItem, ...prev]);
    }

    reset();
    setEditingTechnology(null);
    setOpen(false);
  };

  /* ---------- DELETE ---------- */
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this technology item?"))
      return;
    await fetch(`https://ek3dprints.com/api/technology/${id}`, {
      method: "DELETE",
    });
    setTechnology((prev) => prev.filter((n) => n._id !== id));
  };

  /* ---------- EDIT ---------- */
  const handleEdit = (item: TechnologyItem) => {
    setEditingTechnology(item);
    setValue("titleEn", item.titleEn);
    setValue("titleAr", item.titleAr);
    setValue("descriptionEn", item.descriptionEn);
    setValue("descriptionAr", item.descriptionAr);
    setOpen(true);
  };

  if (loading) return <p className="text-gray-500">Loading technology...</p>;

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Technology
        </h2>
        <button
          onClick={() => {
            reset();
            setEditingTechnology(null);
            setOpen(true);
          }}
          className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded shadow"
        >
          + Add Technology
        </button>
      </div>

      {/* EMPTY */}
      {technology.length === 0 && (
        <p className="text-gray-500">No technology items found</p>
      )}

      {/* LIST */}
      <div className="space-y-4">
        {technology.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row border rounded-lg shadow-sm overflow-hidden bg-white dark:bg-gray-800"
          >
            <div className="w-full md:w-48 h-32 md:h-auto overflow-hidden flex-shrink-0">
              {item.image && (
                <img
                  src={`https://ek3dprints.com/uploads/${item.image}`}
                  alt="Technology"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.titleEn}
                  </h3>
                  <span className="text-xs text-gray-400 dark:text-gray-300">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h4
                  dir="rtl"
                  className="text-md font-semibold text-gray-700 dark:text-gray-200 mt-1"
                >
                  {item.titleAr}
                </h4>

                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {item.descriptionEn}
                </p>

                <p
                  dir="rtl"
                  className="text-sm text-gray-700 dark:text-gray-300 mt-2"
                >
                  {item.descriptionAr}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
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
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.image && (
              <p className="text-red-600 text-sm">
                {errors.image.message?.toString()}
              </p>
            )}
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            {editingTechnology ? "Update Technology" : "Save Technology"}
          </button>
        </form>
      </Modal>
    </div>
  );
}