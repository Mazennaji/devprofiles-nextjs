import { ReactNode } from "react";

type DevelopersLayoutProps = {
  children: ReactNode;
};

export default function DevelopersLayout({ children }: DevelopersLayoutProps) {
  return (
    <section>
      <h2>Developer Profiles</h2>
      {children}
    </section>
  );
}
