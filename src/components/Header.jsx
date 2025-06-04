// // import { Link } from 'react-router-dom';

// // export default function Header() {
// //   return (
// //     <header className="bg-yellow-200 shadow-md p-4">
// //       <nav className="container mx-auto flex justify-between items-center">
// //         <h1 className="text-xl md:text-2xl font-bold text-red-800">📖 साहित्यदर्पणशाला</h1>
// //         <ul className="flex gap-4">
// //           <li><Link to="/">होम</Link></li>
// //           <li><Link to="/poets">कविगण</Link></li>
// //           <li><Link to="/poems">कविताएँ</Link></li>
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // }
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { auth } from '../firebase';
// import { onAuthStateChanged, signOut } from 'firebase/auth';

// export default function Header() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate('/');
//   };

//   return (
//     <header className="bg-yellow-200 shadow-md p-4">
//       <nav className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl md:text-2xl font-bold text-red-800">📖 <Link to="/">साहित्यदर्पणशाला</Link></h1>

//         <ul className="flex gap-4 items-center text-sm md:text-base">
//           <li><Link to="/">होम</Link></li>
//           <li><Link to="/poets">कविगण</Link></li>
//           <li><Link to="/poems">कविताएँ</Link></li>

//           {!user ? (
//             <li>
//               <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
//                 🔐 लॉगिन
//               </Link>
//             </li>
//           ) : (
//             <>
//               <li>
//                 <Link to="/admin" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
//                   🧑‍💼 Admin Panel
//                 </Link>
//               </li>
//               <li>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                 >
//                   🚪 लॉगआउट
//                 </button>
//               </li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </header>
//   );
// }
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../assets/logo.png'; // <-- अपना लोगो PNG रखें (e.g. public या src/assets/ में)

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <header className="bg-yellow-100 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-15 w-15 rounded-full border border-red-500" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-red-800">
            <Link to="/">साहित्यदर्पणशाला</Link>
          </h1>
        </div>

        {/* Right: Menu Items */}
        <ul className="flex flex-wrap gap-3 items-center text-sm md:text-base mt-3 md:mt-0">
          <li>
            <Link to="/" className="hover:text-blue-700">🏠 होम</Link>
          </li>
          <li>
            <Link to="/poets" className="hover:text-blue-700">🧑‍🎤 कविगण</Link>
          </li>
          <li>
            <Link to="/poems" className="hover:text-blue-700">✍️ कविताएँ</Link>
          </li>

          {!user ? (
            <li>
              <Link to="/login" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                🔐 लॉगिन
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/admin" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                  🧑‍💼 Admin Panel
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  🚪 लॉगआउट
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
