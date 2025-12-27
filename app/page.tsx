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
    <main>
      <h1>Developers</h1>
      <ul>
        {developers.map((dev) => (
          <li key={dev.id}>
            <Link href={`/developers/${dev.id}`}>
              <strong>{dev.name}</strong> – {dev.role}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
