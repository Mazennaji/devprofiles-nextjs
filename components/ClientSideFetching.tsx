'use client';

import React, { useEffect, useState } from 'react';

interface Developer {
  id: number;
  name: string;
  role: string;
  description: string;
}

export default function ClientSideFetching() {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDevelopers([
        { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', description: 'Frontend engineer focused on clean UI and accessibility.' },
        { id: 2, name: 'Bob Smith', role: 'Backend Developer', description: 'Backend specialist working with APIs and databases.' },
        { id: 3, name: 'Charlie Brown', role: 'Full Stack Developer', description: 'Delivers scalable solutions across frontend and backend.' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p className="text-center mt-8">Loading developers (Client-Side)...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {developers.map(dev => (
        <div key={dev.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="bg-blue-100 text-blue-700 font-bold w-8 h-8 flex items-center justify-center rounded mb-2">
            {dev.name[0]}
          </div>
          <h2 className="font-bold text-lg">{dev.name}</h2>
          <p className="text-blue-600">{dev.role}</p>
          <p className="text-gray-600 mt-2">{dev.description}</p>
          <a href="#" className="text-blue-600 mt-2 inline-block">View Profile →</a>
        </div>
      ))}
    </div>
  );
}
