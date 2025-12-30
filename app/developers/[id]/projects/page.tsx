import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const projectsByDeveloper: Record<
  string,
  {
    title: string;
    description: string;
    tech: string[];
  }[]
> = {
  "1": [
    {
      title: "UI Component Library",
      description:
        "Reusable, accessible UI components built with React and Tailwind.",
      tech: ["React", "Tailwind CSS", "Storybook"],
    },
    {
      title: "Landing Page Redesign",
      description:
        "Modern marketing site focused on performance and SEO.",
      tech: ["Next.js", "TypeScript"],
    },
  ],
  "2": [
    {
      title: "REST API Platform",
      description:
        "Scalable backend APIs with authentication and role management.",
      tech: ["Node.js", "Express", "PostgreSQL"],
    },
  ],
  "3": [
    {
      title: "E-commerce Platform",
      description:
        "Full-stack application with payments and admin dashboard.",
      tech: ["React", "Node.js", "Docker"],
    },
  ],
  "4": [
    {
      title: "Fitness Tracker App",
      description:
        "Android app for tracking workouts and performance metrics.",
      tech: ["Kotlin", "Firebase"],
    },
  ],
};

export default async function ProjectsPage({ params }: PageProps) {
  const { id } = await params;

  const projects = projectsByDeveloper[id] ?? [];

  return (
    <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900">
          Projects
        </h3>

        <Link
          href={`/developers/${id}`}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to profile
        </Link>
      </div>

      {projects.length === 0 ? (
        <p className="text-gray-600">
          No projects available for this developer yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border p-5 transition hover:shadow-md"
            >
              <h4 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h4>

              <p className="mt-2 text-gray-600">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
