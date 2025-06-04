import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function PoetPage() {
  const { name } = useParams();
  const [poems, setPoems] = useState([]);

  const fetchPoems = async () => {
    const snapshot = await getDocs(collection(db, 'poems'));
    const data = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(poem => poem.poet === name);
    setPoems(data);
  };

  useEffect(() => {
    fetchPoems();
  }, [name]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">कवि: {name}</h1>

      {poems.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">इस कवि की कोई कविता नहीं मिली।</p>
      ) : (
        <div className="grid gap-6">
          {poems.map(poem => (
            <div
              key={poem.id}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-white dark:bg-gray-900"
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">{poem.title}</h2>
              <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-100">{poem.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
