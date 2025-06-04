import { useEffect, useState } from 'react';

export default function Poets() {
  const [poets, setPoets] = useState([]);

  useEffect(() => {
    fetch('/poets.json')
      .then(res => res.json())
      .then(data => setPoets(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">कवियों की सूची</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {poets.map((poet, index) => (
          <div key={index} className="border p-4 rounded shadow bg-yellow-50">
            <h3 className="text-xl font-semibold">{poet.name}</h3>
            <p className="text-sm text-gray-700 mt-2">{poet.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
