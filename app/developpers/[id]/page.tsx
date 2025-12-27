import Link from "next/link";

type Developer = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

const developers: Developer[] = [
  { id: "1", name: "Alice Johnson", role: "Frontend Developer", bio: "React and UI specialist." },
  { id: "2", name: "Bob Smith", role: "Backend Developer", bio: "Node.js and database expert." },
  { id: "3", name: "Charlie Brown", role: "Full Stack Developer", bio: "Works across frontend and backend." },
];

type PageProps = {
  params: {
    id: string;
  };
};

export default function DeveloperPage({ params }: PageProps) {
  const developer = developers.find((dev) => dev.id === params.id);

  if (!developer) {
    return (
      <p className="rounded-lg bg-red-100 p-4 text-red-700">
        Developer not found
      </p>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-900">
        {developer.name}
      </h3>

      <p className="mt-2 text-gray-600">
        <span className="font-medium">Role:</span> {developer.role}
      </p>

      <p className="mt-4 text-gray-700">{developer.bio}</p>

      <Link
        href={`/developers/${developer.id}/projects`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
      >
        View Projects
      </Link>
    </div>
  );
}
