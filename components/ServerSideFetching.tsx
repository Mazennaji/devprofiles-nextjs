import React from 'react';

interface Developer {
  id: number;
  name: string;
  role: string;
  description: string;
}

// Simulate server-side fetching
async function fetchDevelopers(): Promise<Developer[]> {
  return [
    { id: 4, name: 'Sam Muller', role: 'Android Developer', description: 'Android developer focused on building mobile apps.' },
    { id: 5, name: 'Mike Khazaal', role: 'Game Developer', description: 'Game developer focused on building fun gaming experiences.' },
  ];
}

export default async function ServerSideFetching() {
  const developers = await fetchDevelopers();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
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
