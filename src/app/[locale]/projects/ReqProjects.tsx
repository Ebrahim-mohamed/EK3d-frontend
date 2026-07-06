import { Hero } from "@/components/Hero";
import { ProjectTemplate } from "./ProjectTemplate";

type Project = {
  _id: string;
  images: string[];
  serviceKind: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
};

/* Canonical service kinds, keyed by a short keyword that should appear
   in the URL slug however it's formatted (e.g. "scanning", "3d-scanning",
   "3dscanning" all resolve to "3D Scanning"). */
const SERVICE_KEYWORDS: Record<string, string> = {
  design: "3D Design",
  scanning: "3D Scanning",
  printing: "3D Printing",
};

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function resolveServiceKind(cat: string): string | undefined {
  const normalizedCat = normalize(cat);
  const match = Object.entries(SERVICE_KEYWORDS).find(([keyword]) =>
    normalizedCat.includes(keyword)
  );
  return match?.[1];
}

async function getProjects() {
  const res = await fetch("http://localhost:4002/api/projects", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function ReqProject({ cat }: { cat: string }) {
  const projects: Project[] = await getProjects();
  const serviceKind = resolveServiceKind(cat);

  const filteredProjects = serviceKind
    ? projects.filter((project) => project.serviceKind === serviceKind)
    : [];

  const heroTitle = serviceKind ?? "Projects";

  return (
    <div>
      <Hero
        page="services"
        title={heroTitle}
        pra={`A Curated Selection of Our ${heroTitle} Project Landmarks`}
      />

      <div className="px-[var(--sectionPadding)] py-4 bg-[#050606]">
        {filteredProjects.length === 0 && (
          <p className="text-white text-center py-10">
            No projects found for this category.
          </p>
        )}
        {filteredProjects.map((project, index) => (
          <ProjectTemplate
            key={project._id}
            num={index}
            titleEn={project.titleEn}
            titleAr={project.titleAr}
            descriptionEn={project.descriptionEn}
            descriptionAr={project.descriptionAr}
            serviceKind={project.serviceKind}
            images={project.images}
          />
        ))}
      </div>
    </div>
  );
}