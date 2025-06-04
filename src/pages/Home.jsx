// import { useEffect, useState } from 'react';
// import { db } from '../firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const [poems, setPoems] = useState([]);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const poemsPerPage = 6;

//   const fetchPoems = async () => {
//     const snapshot = await getDocs(collection(db, 'poems'));
//     const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setPoems(data);
//   };

//   useEffect(() => {
//     fetchPoems();
//   }, []);

//   const filteredPoems = poems.filter(poem =>
//     (poem.title + poem.poet + poem.text).toLowerCase().includes(search.toLowerCase())
//   );
//    // Pagination logic
//   const indexOfLastPoem = currentPage * poemsPerPage;
//   const indexOfFirstPoem = indexOfLastPoem - poemsPerPage;
//   const currentPoems = filteredPoems.slice(indexOfFirstPoem, indexOfLastPoem);
//   const totalPages = Math.ceil(filteredPoems.length / poemsPerPage);

//   const goToNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(prev => prev - 1);
//   };


//   return (
//     <div className="max-w-5xl mx-auto p-6 space-y-10">

//       {/* उद्देश्य */}
//       <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🎯 उद्देश्य</h2>
//         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//           साहित्यदर्पणशाला का उद्देश्य हिंदी साहित्य, विशेषकर कविता के संरक्षण और प्रचार-प्रसार को बढ़ावा देना है। यह पोर्टल नवोदित और प्रख्यात दोनों प्रकार के कवियों को एक मंच प्रदान करता है जहाँ वे अपनी रचनाएँ साझा कर सकें और पाठकों तक पहुँच सकें।
//         </p>
//       </div>

//       {/* संस्था परिचय */}
//       <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🏛️ संस्था परिचय</h2>
//         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//           यह पोर्टल <strong>कवि बालेन्दु प्रभाकर मिश्र </strong> जी के मार्गदर्शन में संचालित है, जो हिंदी कविता और आलोचना के क्षेत्र में एक प्रतिष्ठित नाम हैं।
//           संस्था का मुख्य उद्देश्य डिजिटल युग में साहित्यिक मूल्यों को संरक्षित रखते हुए, साहित्य को नए आयाम देना है।
//         </p>
//       </div>

//       {/* कवि बालेन्दु प्रभाकर मिश्र  */}
//       <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
//         <img src="./src/assets/balendu-mishra.png" alt="कवि बालेन्दु प्रभाकर मिश्र " className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400" />
//         <div>
//           <h3 className="text-xl font-bold text-gray-800 dark:text-white">कवि बालेन्दु प्रभाकर मिश्र </h3>
//           <p className="text-gray-700 dark:text-gray-300 mt-2">
//             कवि बालेन्दु  का हिंदी कविता क्षेत्र में योगदान अमूल्य है। उन्होंने अनेक काव्य संग्रह, आलोचनात्मक लेख और साहित्यिक आयोजन किए हैं जो युवाओं के लिए प्रेरणा हैं।
//           </p>
//         </div>
//       </div>

//       {/* प्रकाशित कृतियाँ */}
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📚 प्रकाशित कृतियाँ</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          // <img src="/images/book1.jpg" alt="छंद संग्रह (आहट प्रत्यूष की)" className="rounded shadow" />
          // <img src="/images/book2.jpg" alt="मुक्तक संग्रह (उम्मीद सूरज निकलने की)" className="rounded shadow" />
          // <img src="/images/book3.jpg" alt="गजल संग्रह (गम यहां भी कम नहीं)" className="rounded shadow" />
          //  <img src="/images/book1.jpg" alt="गजल संग्रह (धूप मरहम सी)" className="rounded shadow" />
          // <img src="/images/book2.jpg" alt="गजल संग्रह (पीर का गहरा समंदर)" className="rounded shadow" />
          // <img src="/images/book3.jpg" alt="गीत संग्रह (प्रीति की पांखुरी)" className="rounded shadow" />
          //  <img src="/images/book1.jpg" alt="गीत संग्रह (आखिर गीत सुनाऊं कैसे)" className="rounded shadow" />
          // <img src="/images/book2.jpg" alt="दोहा संग्रह (नेह के नूपुर) दोहा शतसई " className="rounded shadow" />
          // <img src="/images/book3.jpg" alt="गजल संग्रह (तार-तार टूटते रहे) " className="rounded shadow" />
          // <img src="/images/book3.jpg" alt="मुक्तक संग्रह (प्यार की सँकरी गली में)" className="rounded shadow" />
//         </div>
//       </div>

//       {/* खोज और कविताएँ */}
//       <div>
//         <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📚 नई कविताएँ</h2>

//         <input
//           type="text"
//           placeholder="🔍 खोजें: कवि, शीर्षक या शब्द..."
//           className="w-full mb-6 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         {filteredPoems.length === 0 ? (
//           <p className="text-gray-500 dark:text-gray-300">कोई मिलान नहीं मिला।</p>
//         ) : (
//           <div className="grid gap-6">
//             {filteredPoems.map(poem => (
//               <div
//                 key={poem.id}
//                 className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-white dark:bg-gray-900"
//               >
//                 <p className="text-sm italic text-blue-600 dark:text-blue-400 mb-2">
//                   <Link to={`/poet/${encodeURIComponent(poem.poet)}`}>- {poem.poet}</Link>
//                 </p>
//                 <h2 className="text-xl font-bold text-gray-800 dark:text-white">
//                   <Link to={`/poem/${poem.id}`} className="hover:underline">{poem.title}</Link>
//                 </h2>
//                 <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-100">{poem.text}</p>
//               </div>
//             ))}
//           </div>
          
//         )}
//       </div>
//       {/* 🏁 संपर्क जानकारी (Footer Style Section) */}
//       <div className="bg-gray-100 dark:bg-gray-800 text-center p-6 rounded-lg shadow mt-10">
//         <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">📍 संपर्क जानकारी</h3>
//         <p className="text-gray-700 dark:text-gray-300">बालेन्दु प्रभाकर मिश्र</p>
//         <p className="text-gray-700 dark:text-gray-300">नागौद, जिला सतना, मध्य प्रदेश - 485446</p>
//         <p className="text-gray-700 dark:text-gray-300 mt-2">📞 संपर्क: 9425884465, 7000594027</p>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Home() {
  const [poems, setPoems] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const poemsPerPage = 2;

  const fetchPoems = async () => {
    const snapshot = await getDocs(collection(db, 'poems'));
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPoems(data);
  };

  useEffect(() => {
    fetchPoems();
  }, []);

  const filteredPoems = poems.filter(poem =>
    (poem.title + poem.poet + poem.text).toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPoem = currentPage * poemsPerPage;
  const indexOfFirstPoem = indexOfLastPoem - poemsPerPage;
  const currentPoems = filteredPoems.slice(indexOfFirstPoem, indexOfLastPoem);
  const totalPages = Math.ceil(filteredPoems.length / poemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">

      {/* उद्देश्य */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🎯 उद्देश्य</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          साहित्यदर्पणशाला का उद्देश्य हिंदी साहित्य, विशेषकर कविता के संरक्षण और प्रचार-प्रसार को बढ़ावा देना है। यह पोर्टल नवोदित और प्रख्यात दोनों प्रकार के कवियों को एक मंच प्रदान करता है जहाँ वे अपनी रचनाएँ साझा कर सकें और पाठकों तक पहुँच सकें।
        </p>
      </div>

      {/* संस्था परिचय */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">🏛️ संस्था परिचय</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          यह पोर्टल <strong>कवि बालेन्दु प्रभाकर मिश्र </strong> जी के मार्गदर्शन में संचालित है, जो हिंदी कविता और आलोचना के क्षेत्र में एक प्रतिष्ठित नाम हैं।
          संस्था का मुख्य उद्देश्य डिजिटल युग में साहित्यिक मूल्यों को संरक्षित रखते हुए, साहित्य को नए आयाम देना है।
        </p>
      </div>

      {/* कवि बालेन्दु प्रभाकर मिश्र */}
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
        <img src="./src/assets/balendu-mishra.png" alt="कवि बालेन्दु प्रभाकर मिश्र " className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400" />
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">कवि बालेन्दु प्रभाकर मिश्र </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            कवि बालेन्दु  का हिंदी कविता क्षेत्र में योगदान अमूल्य है। उन्होंने अनेक काव्य संग्रह, आलोचनात्मक लेख और साहित्यिक आयोजन किए हैं जो युवाओं के लिए प्रेरणा हैं।
          </p>
        </div>
      </div>

      {/* प्रकाशित कृतियाँ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📚 प्रकाशित कृतियाँ</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <img src="/images/aahatpratustki.jpeg" alt="छंद संग्रह (आहट प्रत्यूष की)" className="rounded shadow" />
          <img src="/images/ummidsuraj.jpeg" alt="मुक्तक संग्रह (उम्मीद सूरज निकलने की)" className="rounded shadow" />
          <img src="/images/gamyhayh bhi km nhi.jpeg" alt="गजल संग्रह (गम यहां भी कम नहीं)" className="rounded shadow" />
           <img src="/images/dhupmlhumse.jpeg" alt="गजल संग्रह (धूप मरहम सी)" className="rounded shadow" />
          <img src="/images/peerkasamundr.jpeg" alt="गजल संग्रह (पीर का गहरा समंदर)" className="rounded shadow" />
          <img src="/images/preetke pashuri.jpeg" alt="गीत संग्रह (प्रीति की पांखुरी)" className="rounded shadow" />
           <img src="/images/aakirgeetsunau.jpeg" alt="गीत संग्रह (आखिर गीत सुनाऊं कैसे)" className="rounded shadow" />
          <img src="/images/nehkenupur.jpeg" alt="दोहा संग्रह (नेह के नूपुर) दोहा शतसई " className="rounded shadow" />
          <img src="/images/tartar tutterhe.jpeg" alt="गजल संग्रह (तार-तार टूटते रहे) " className="rounded shadow" />
          <img src="/images/book3.jpg" alt="मुक्तक संग्रह (प्यार की सँकरी गली में)" className="rounded shadow" />
        </div>
      </div>
      {/* साझा संकलन */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📚 साझा संकलन </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/सुकवि सतक.jpeg" alt="सुकवि सतक" className="rounded shadow" />
          <img src="/images/सुकवि पंचरत्न .jpeg" alt="सुकवि पंचरत्न " className="rounded shadow" />
          <img src="/images/साक्षात्कार -आइने के सामने.jpeg" alt="साक्षात्कार -आइने के सामने " className="rounded shadow" />
           <img src="/images/गजलाष्टक.jpeg" alt="गजलाष्टक" className="rounded shadow" />
          <img src="/images/55हिंदुस्तानी ग़ज़लें.jpeg" alt="55हिंदुस्तानी ग़ज़लें " className="rounded shadow" />
          <img src="/images/काव्य कल्पतरु .jpeg" alt="काव्य कल्पतरु " className="rounded shadow" />
           <img src="/images/सुकवि सप्तक.jpeg" alt="सुकवि सप्तक" className="rounded shadow" />
          <img src="/images/दो किनारे .jpeg" alt="दो किनारे  " className="rounded shadow" />
          <img src="/images/100सुकवि(संदर्भ ग्रंथ).jpeg" alt="100सुकवि(संदर्भ ग्रंथ)" className="rounded shadow" />
          <img src="/images/book3.jpg" alt="52 चर्चित हस्ताक्षर (सुकवि बावनी)" className="rounded shadow" />
        </div>
      </div>

      {/* खोज और कविताएँ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📚 नई कविताएँ</h2>

        <input
          type="text"
          placeholder="🔍 खोजें: कवि, शीर्षक या शब्द..."
          className="w-full mb-6 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // search पर page reset
          }}
        />

        {currentPoems.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-300">कोई मिलान नहीं मिला।</p>
        ) : (
          <>
            <div className="grid gap-6">
              {currentPoems.map(poem => (
                <div
                  key={poem.id}
                  className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-white dark:bg-gray-900"
                >
                  <p className="text-sm italic text-blue-600 dark:text-blue-400 mb-2">
                    <Link to={`/poet/${encodeURIComponent(poem.poet)}`}>- {poem.poet}</Link>
                  </p>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    <Link to={`/poem/${poem.id}`} className="hover:underline">{poem.title}</Link>
                  </h2>
                  <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-100">{poem.text}</p>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {filteredPoems.length > poemsPerPage && (
              <div className="flex justify-center items-center mt-6 gap-4">
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
                >
                  ⬅️ पिछला
                </button>
                <span className="text-gray-800 dark:text-white">
                  पृष्ठ {currentPage} / {totalPages}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white disabled:opacity-50"
                >
                  अगला ➡️
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-100 dark:bg-gray-800 text-center p-6 rounded-lg shadow mt-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">📍 संपर्क जानकारी</h3>
        <p className="text-gray-700 dark:text-gray-300">बालेन्दु प्रभाकर मिश्र</p>
        <p className="text-gray-700 dark:text-gray-300">नागौद, जिला सतना, मध्य प्रदेश - 485446</p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">📞 संपर्क: 9425884465, 7000594027</p>
      </div>
    </div>
  );
}
