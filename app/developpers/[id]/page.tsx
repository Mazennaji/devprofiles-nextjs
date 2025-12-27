import Link from "next/link";
import { developers } from "@/app/data/developers";

export default function DeveloperPage({
  params,
}: {
  params: { id: string };
}) {
  const developer = developers.find(d => d.id === params.id);

  if (!developer) {
    return (
      <p className="rounded bg-red-100 p-4 text-red-700">
        Developer not found
      </p>
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
              className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
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
