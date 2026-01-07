export type Developer = {
  id: string;
  name: string;
  role: string;
  bio: string;
  technologies: string[];
};

export const developers: Developer[] = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "Frontend Developer",
    bio: "Frontend engineer focused on clean UI and accessibility.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "Backend Developer",
    bio: "Backend specialist working with APIs and databases.",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    id: "3",
    name: "Charlie Brown",
    role: "Full Stack Developer",
    bio: "Delivers scalable solutions across frontend and backend.",
    technologies: ["React", "Node.js", "MySQL", "Docker"],
  },
  {
    id: "4",
    name: "Sam Muller",
    role: "Android Developer",
    bio: "Android developer focused on building performant mobile applications.",
    technologies: ["Kotlin", "Java", "Android Studio", "Firebase"],
  },
  {
    id: "5",
    name: "Mike Khazaal",
    role: "Game Developer",
    bio: "Game developer focused on building performant game applications.",
    technologies: ["Unity Engine", "Blender", "C#"],
  },
];
