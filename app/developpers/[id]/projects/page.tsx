type PageProps = {
  params: {
    id: string;
  };
};

export default function ProjectsPage({ params }: PageProps) {
  return (
    <div>
      <h3>Projects</h3>
      <p>This page shows the projects for developer with ID: {params.id}</p>
    </div>
  );
}
