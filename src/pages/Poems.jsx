import { useEffect, useState } from 'react';

export default function Poems() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetch('/poets.json')
      .then(res => res.json())
      .then(data => {
        const allPoems = data.flatMap(poet =>
          poet.poems.map(poem => ({
            ...poem,
            poet: poet.name
          }))
        );
        setPoems(allPoems);
      });
  }, []);
  
  const [search, setSearch] = useState("");
   <input
  type="text"
  placeholder="कविता या कवि खोजें..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-2 w-full mb-4"
  />


  const filteredPoems = poems.filter(poem =>
  poem.title.toLowerCase().includes(search.toLowerCase()) ||
  poem.poet.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">कविताएँ</h2>
      <div className="space-y-4">
        {poems.map((poem, index) => (
          <div key={index} className="border p-4 rounded shadow-sm bg-white">
            <h3 className="text-xl font-semibold">{poem.title}</h3>
            <p className="italic text-sm text-gray-600">- {poem.poet}</p>
            <p className="mt-2 whitespace-pre-wrap text-gray-800">{poem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
