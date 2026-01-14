'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav
      className="bg-blue-600 text-white shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            DevProfiles
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/70"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
