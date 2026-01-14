import Link from 'next/link';

export default function DeveloperNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-8xl font-bold text-gray-300">404</div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Developer Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The developer profile you're looking for doesn't exist or may have been removed.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
          >
            View All Developers
          </Link>
          <Link
            href="/developers"
            className="inline-block bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors w-full"
          >
            Manage Developers
          </Link>
        </div>
      </div>
    </div>
  );
}