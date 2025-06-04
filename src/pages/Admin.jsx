// import { useState, useEffect } from 'react';
// import { db } from '../firebase';
// import { collection, addDoc, getDocs } from 'firebase/firestore';

// export default function Admin() {
//   const [poet, setPoet] = useState('');
//   const [title, setTitle] = useState('');
//   const [text, setText] = useState('');
//   const [poems, setPoems] = useState([]);

//   const poemsCollection = collection(db, 'poems');

//   const fetchPoems = async () => {
//     const snapshot = await getDocs(poemsCollection);
//     const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setPoems(data);
//   };

//   useEffect(() => {
//     fetchPoems();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPoem = { poet, title, text };

//     try {
//       await addDoc(poemsCollection, newPoem);
//       setPoet('');
//       setTitle('');
//       setText('');
//       fetchPoems(); // Refresh list
//     } catch (err) {
//       console.error("Error adding document: ", err);
//     }
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">🖊️ नई कविता जोड़ें (Firebase)</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="कवि का नाम"
//           className="w-full border p-2 rounded"
//           value={poet}
//           onChange={(e) => setPoet(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="कविता शीर्षक"
//           className="w-full border p-2 rounded"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="कविता टेक्स्ट..."
//           rows="6"
//           className="w-full border p-2 rounded"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           required
//         />
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
//           जोड़ें
//         </button>
//       </form>

//       {poems.length > 0 && (
//         <div className="mt-8">
//           <h3 className="text-xl font-semibold mb-2">🔥 सेव की गई कविताएँ:</h3>
//           <ul className="space-y-4">
//             {poems.map((poem) => (
//               <li key={poem.id} className="border p-4 bg-gray-50 dark:bg-gray-800 rounded">
//                 <h4 className="text-lg font-bold">{poem.title}</h4>
//                 <p className="italic text-sm">- {poem.poet}</p>
//                 <p className="mt-2 whitespace-pre-wrap">{poem.text}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from 'react';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [title, setTitle] = useState('');
  const [poet, setPoet] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !poet || !text) {
      setMessage('कृपया सभी फ़ील्ड भरें।');
      return;
    }

    try {
      await addDoc(collection(db, 'poems'), {
        title,
        poet,
        text,
        createdAt: Timestamp.now(),
      });
      setTitle('');
      setPoet('');
      setText('');
      setMessage('✅ कविता सफलतापूर्वक जोड़ी गई!');
    } catch (err) {
      console.error(err);
      setMessage('❌ कुछ गड़बड़ हो गई।');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📝 कविता अपलोड करें</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          🔒 लॉगआउट
        </button>
      </div>

      {message && (
        <p className="mb-4 text-sm text-green-600 dark:text-green-400">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="कविता का शीर्षक"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="कवि का नाम"
          value={poet}
          onChange={(e) => setPoet(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded h-40"
          placeholder="कविता की पंक्तियाँ"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          ➕ कविता जोड़ें
        </button>
      </form>
    </div>
  );
}
