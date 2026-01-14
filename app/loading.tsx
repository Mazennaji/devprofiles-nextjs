export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
  
      <header className="bg-blue-600 text-white p-4 shadow-md text-center">
        <h1 className="text-xl font-semibold">My App</h1>
      </header>

  
      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-md">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="text-gray-600 text-lg">Loading, please wait...</p>
          <p className="text-gray-400 text-sm">This might take a few seconds.</p>
        </div>
      </main>


      <footer className="bg-gray-100 text-gray-500 text-center p-4">
        &copy; 2026 My App. All rights reserved.
      </footer>
    </div>
  );
}
