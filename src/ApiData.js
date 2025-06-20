import React, { useState } from "react";

const ApiData = () => {
  const [api, setApi] = useState([]);

  const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rs) => rs.json())
      .then((data) => setApi(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="flex justify-center mb-8">
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition duration-200"
          onClick={fetchUser}
        >
          👥 Load Users
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {api.map((user) => (
          <div
            key={user.id}
            className="bg-white border-2 border-blue-200 shadow-xl rounded-2xl p-5 hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-blue-800 mb-2">{user.name}</h2>
            <p className="text-gray-700">
              📧 <span className="font-medium">{user.email}</span>
            </p>
            <p className="text-gray-700">
              📍 <span className="font-medium">{user.address.city}</span>
            </p>
            <p className="text-gray-700">
              📞 <span className="font-medium">{user.phone}</span>
            </p>
            <p className="text-gray-700">
              🌐 <span className="font-medium">{user.website}</span>
            </p>
            <p className="text-gray-700">
              🏢 <span className="font-medium">{user.company.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiData;
