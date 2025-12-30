type PageProps = {
  params: {
    id: string;
  };
};

export default function ProjectsPage({ params }: PageProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">
        Projects
      </h3>
      <p className="text-gray-700">
        This page displays projects for developer with ID:{" "}
        <span className="font-medium">{params.id}</span>
      </p>
    </div>
  );
}
