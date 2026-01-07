"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-600">
          An unexpected error occurred. Please try again.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Try again
          </button>

          <Link
            href="/"
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
