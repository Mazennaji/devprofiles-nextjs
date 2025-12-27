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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Developers
      </h1>

      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        {developers.map((dev) => (
          <Link
            key={dev.id}
            href={`/developers/${dev.id}`}
            className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {dev.name}
            </h2>
            <p className="mt-1 text-sm text-gray-500">{dev.role}</p>
            <p className="mt-3 text-gray-600">{dev.bio}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
