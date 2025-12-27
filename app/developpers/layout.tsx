import { ReactNode } from "react";

type DevelopersLayoutProps = {
  children: ReactNode;
};

export default function DevelopersLayout({ children }: DevelopersLayoutProps) {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Developer Profiles
        </h2>
        {children}
      </div>
    </section>
  );
}
