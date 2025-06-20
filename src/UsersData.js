import React, { useState } from 'react';

const UsersData = () => {
  const [artData, setArtData] = useState([]);

  const fetchArtData = () => {
    fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
      .then((res) => res.json())
      .then((data) => setArtData(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <div className="flex justify-center mb-6">
        <button
          onClick={fetchArtData}
          className="bg-blue-700 text-white font-semibold rounded-xl px-6 py-3 hover:bg-blue-800 transition-all shadow-lg"
        >
          🖼 Load Artworks
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {artData.map((art) => (
          <div
            key={art.id}
            className="bg-white border-2 border-blue-400 rounded-2xl shadow-lg w-[300px] p-4 transition-transform hover:scale-105"
          >
            {art.image_id ? (
              <img
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                alt={art.title}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 rounded-xl mb-3 flex items-center justify-center text-gray-600 text-sm">
                No Image Available
              </div>
            )}

            <p className="text-xl font-bold text-blue-800 mb-1">
              {art.title || 'Untitled'}
            </p>
            <p className="text-md text-gray-800">
              <strong>Artist:</strong> {art.artist_display || 'Unknown'}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Medium:</strong> {art.medium_display || 'N/A'}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Date:</strong> {art.date_display || 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersData;
