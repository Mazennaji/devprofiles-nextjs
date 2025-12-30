import Link from "next/link";
import { developers } from "@/data/developers";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
            DevProfiles
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Explore developer profiles and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {developers.map((dev) => (
            <Link
              key={dev.id}
              href={`/developers/${dev.id}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-lg font-bold text-blue-600">
                  {dev.name.charAt(0)}
                </div>

                <h2 className="text-xl font-semibold text-gray-900">
                  {dev.name}
                </h2>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {dev.role}
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {dev.bio}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700">
                  View Profile
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
