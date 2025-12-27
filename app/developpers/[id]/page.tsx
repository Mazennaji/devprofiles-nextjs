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
    return <p>Developer not found</p>;
  }

  return (
    <div>
      <h3>{developer.name}</h3>
      <p><strong>Role:</strong> {developer.role}</p>
      <p>{developer.bio}</p>

      <Link href={`/developers/${developer.id}/projects`}>
        View Projects
      </Link>
    </div>
  );
}
