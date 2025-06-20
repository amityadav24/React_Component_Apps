import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "🧮 Counter", path: "/counter" },
    { label: "🦜 Tweet", path: "/tweet" },
    { label: "📡 API Users", path: "/apidata" },
    { label: "🖼️ Art Gallary", path: "/usersdata" },
    { label: "💬 Emoji Chat", path: "/emoji" },
    { label: "📝 Form Validation", path: "/form" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-white mb-10 drop-shadow-md">
        🚀 React Feature Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {pages.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="bg-white text-blue-700 font-bold px-6 py-4 rounded-2xl shadow-lg hover:bg-blue-100 transition-all text-lg"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
