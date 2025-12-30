import Link from "next/link";
import { developers } from "@/data/developers";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DeveloperPage({ params }: PageProps) {
  const { id } = await params;

  const developer = developers.find(
    (dev) => dev.id === id
  );

  if (!developer) {
    return (
      <div className="mx-auto max-w-3xl p-8">
        <p className="rounded bg-red-100 p-4 text-red-700">
          Developer not found
        </p>
        <Link href="/" className="text-blue-600">
          ← Back to developers
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold">{developer.name}</h1>
      <p className="text-gray-500">{developer.role}</p>

      <p className="mt-4 text-gray-700">{developer.bio}</p>

      <div className="mt-6">
        <h3 className="mb-2 text-sm font-semibold uppercase text-gray-500">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {developer.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link href="/" className="rounded border px-4 py-2">
          ← Back
        </Link>
        <Link
          href={`/developers/${developer.id}/projects`}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
