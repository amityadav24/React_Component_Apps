import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputvalue, setInputValue] = useState('');
  const [stdobj] = useState([
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit..."
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae..."
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure..."
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis..."
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex justify-center items-center p-6">
      <div className="bg-white border-2 border-blue-400 rounded-3xl p-6 w-[400px] flex flex-col gap-4 items-center shadow-xl">
        <p className="text-2xl font-bold text-blue-800">Count: {count}</p>

        <input
          type="number"
          className="w-full p-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter number"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="flex flex-col gap-2 w-full">
          <button
            className="bg-blue-600 hover:bg-blue-700 rounded-xl p-2 font-bold text-white transition"
            onClick={() => setCount(count + parseInt(inputvalue))}
          >
            ➕ Increment
          </button>

          <button
            className="bg-blue-600 hover:bg-blue-700 rounded-xl p-2 font-bold text-white transition"
            onClick={() => setCount(count - parseInt(inputvalue))}
          >
            ➖ Decrement
          </button>

          <button
            className="bg-blue-400 hover:bg-blue-500 rounded-xl p-2 font-bold text-white transition"
            onClick={() => setCount(0)}
          >
            🔄 Reset
          </button>
        </div>

        <p className="text-blue-900 font-medium">Input Value: {parseInt(inputvalue) || 0}</p>

         Optional: display one title 
        <p className="text-center text-sm text-gray-700 italic">
          Example title: {stdobj[2].title}
        </p>
      </div>
    </div>
  );
};

export default Counter;
