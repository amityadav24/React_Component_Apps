import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Counter', path: '/counter' },
    { label: 'Tweet', path: '/tweet' },
    { label: 'API Users', path: '/apidata' },
    { label: 'Art Gallary', path: '/usersdata' },
    { label: 'Emoji Chat', path: '/emoji' },
    { label: 'Form', path: '/form' },
  ];

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">🚀 My React App</h1>
        <div className="flex flex-wrap gap-3 mt-2 sm:mt-0">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === path
                  ? 'bg-white text-blue-600 font-bold'
                  : 'hover:bg-blue-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
