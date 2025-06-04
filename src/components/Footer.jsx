export default function Footer() {
  return (
    <footer className="bg-yellow-200 dark:bg-gray-800 text-center p-4 mt-10">
      <p className="text-gray-800 dark:text-white">
        © 2025 साहित्यदर्पणशाला | सभी अधिकार सुरक्षित हैं।
      </p>

      {/* 🔗 YouTube Link */}
      <div className="mt-2">
        <a
          href="https://www.youtube.com/@%E0%A4%B8%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%8D%E0%A4%AF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AA%E0%A4%A3%E0%A4%B6%E0%A4%BE%E0%A4%B2%E0%A4%BE" // <-- अपना लिंक यहाँ डालें
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 dark:text-red-400 font-semibold hover:underline"
        >
          📺  साहित्य दर्पण शाला YouTube  चैनल देखें
        </a>
      </div>
    </footer>
  );
}
