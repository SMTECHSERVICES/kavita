import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function PoemPage() {
  const { id } = useParams();
  const [poem, setPoem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const poemRef = doc(db, 'poems', id);
        const poemSnap = await getDoc(poemRef);

        if (poemSnap.exists()) {
          setPoem({ id: poemSnap.id, ...poemSnap.data() });
        } else {
          setError('कविता नहीं मिली।');
        }
      } catch (err) {
        console.error(err);
        setError('कुछ गड़बड़ हो गई।');
      } finally {
        setLoading(false);
      }
    };

    fetchPoem();
  }, [id]);

  if (loading) {
    return <p className="p-4 text-gray-500 dark:text-gray-300">लोड हो रहा है...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-600 dark:text-red-400">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{poem.title}</h1>
      <p className="text-lg italic mb-4 text-blue-600 dark:text-blue-400">- {poem.poet}</p>
      <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-100">{poem.text}</p>
    </div>
  );
}
