import { Hero } from "@/components/Hero";
import { ProjectTemplate } from "./ProjectTemplate";

type Project = {
  _id: string;

  images: string[];

  // Cloudinary video URL
  videoUrl?: string;

  serviceKind: string;

  titleEn: string;

  titleAr: string;

  descriptionEn: string;

  descriptionAr: string;
};

/* Canonical service kinds */

const SERVICE_KEYWORDS: Record<
  string,
  string
> = {
  design: "3D Design",

  scanning: "3D Scanning",

  printing: "3D Printing",
};

/* ================= NORMALIZE ================= */

function normalize(
  value: string
): string {
  return value
    .toLowerCase()
    .replace(
      /[^a-z0-9]/g,
      ""
    );
}

/* ================= RESOLVE SERVICE ================= */

function resolveServiceKind(
  cat: string
): string | undefined {
  const normalizedCat =
    normalize(cat);

  const match =
    Object.entries(
      SERVICE_KEYWORDS
    ).find(([keyword]) =>
      normalizedCat.includes(
        keyword
      )
    );

  return match?.[1];
}

/* ================= GET PROJECTS ================= */

async function getProjects() {
  const res = await fetch(
    "https://ek3dprints.com/api/projects",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch projects"
    );
  }

  return res.json();
}

/* ================= PAGE ================= */

export async function ReqProject({
  cat,
}: {
  cat: string;
}) {
  const projects: Project[] =
    await getProjects();

  const serviceKind =
    resolveServiceKind(cat);

  const filteredProjects =
    serviceKind
      ? projects.filter(
          (project) =>
            project.serviceKind ===
            serviceKind
        )
      : [];

  const heroTitle =
    serviceKind ??
    "Projects";

  return (
    <div>
      <Hero
        page={`${heroTitle}`}
        title={heroTitle}
        pra={`A Curated Selection of Our ${heroTitle} Project Landmarks`}
      />

      <div className="px-[var(--sectionPadding)] py-4 bg-[#050606]">
        {filteredProjects.length ===
          0 && (
          <p className="text-white text-center py-10">
            No projects found for
            this category.
          </p>
        )}

        {filteredProjects.map(
          (
            project,
            index
          ) => (
            <ProjectTemplate
              key={
                project._id
              }
              num={index}
              titleEn={
                project.titleEn
              }
              titleAr={
                project.titleAr
              }
              descriptionEn={
                project.descriptionEn
              }
              descriptionAr={
                project.descriptionAr
              }
              serviceKind={
                project.serviceKind
              }
              images={
                project.images
              }
              videoUrl={
                project.videoUrl
              }
            />
          )
        )}
      </div>
    </div>
  );
}