import React, { useState } from 'react';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [formDataArray, setFormDataArray] = useState([]);
  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!father.trim()) newErrors.father = "Father's name is required";
    if (!mother.trim()) newErrors.mother = "Mother's name is required";
    if (!country.trim()) newErrors.country = "Country is required";
    if (!age || age < 1 || age > 120) newErrors.age = "Age must be between 1 and 120";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newEntry = { name, father, mother, age, country };
      if (editIndex !== null) {
        const updated = [...formDataArray];
        updated[editIndex] = newEntry;
        setFormDataArray(updated);
        setEditIndex(null);
      } else {
        setFormDataArray((prev) => [...prev, newEntry]);
      }

      setName('');
      setFather('');
      setMother('');
      setAge(0);
      setCountry('');
    }
  };

  const handleEdit = (index) => {
    const entry = formDataArray[index];
    setName(entry.name);
    setFather(entry.father);
    setMother(entry.mother);
    setAge(entry.age);
    setCountry(entry.country);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...formDataArray];
    updated.splice(index, 1);
    setFormDataArray(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setName('');
      setFather('');
      setMother('');
      setAge(0);
      setCountry('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">User Information Form 📝</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border-2 border-blue-500 p-6 rounded-3xl shadow-lg w-full max-w-lg space-y-4"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-blue-400 placeholder:text-gray-600 text-blue-900 focus:outline-none"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Father's Name"
            value={father}
            onChange={(e) => setFather(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-blue-400 placeholder:text-gray-600 text-blue-900 focus:outline-none"
          />
          {errors.father && <p className="text-red-600 text-sm mt-1">{errors.father}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Mother's Name"
            value={mother}
            onChange={(e) => setMother(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-blue-400 placeholder:text-gray-600 text-blue-900 focus:outline-none"
          />
          {errors.mother && <p className="text-red-600 text-sm mt-1">{errors.mother}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Your Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full p-3 rounded-xl border-2 border-blue-400 placeholder:text-gray-600 text-blue-900 focus:outline-none"
          />
          {errors.age && <p className="text-red-600 text-sm mt-1">{errors.age}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Your Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-blue-400 placeholder:text-gray-600 text-blue-900 focus:outline-none"
          />
          {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition"
        >
          {editIndex !== null ? "Update" : "Submit"}
        </button>

        <div className="mt-4 bg-blue-50 p-4 rounded-xl border-2 border-blue-400 overflow-x-auto max-h-60 text-sm">
          <h2 className="font-bold text-blue-700 mb-2">📦 JSON Output:</h2>
          <pre className="text-blue-900 whitespace-pre-wrap">{JSON.stringify(formDataArray, null, 2)}</pre>
        </div>
      </form>

      {formDataArray.length > 0 && (
        <div className="mt-10 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Submitted Data</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {formDataArray.map((entry, index) => (
              <div
                key={index}
                className="bg-white text-blue-900 p-4 border-2 border-blue-400 rounded-2xl shadow hover:scale-105 transition-all space-y-1"
              >
                <p><span className="font-semibold text-blue-700">Name:</span> {entry.name}</p>
                <p><span className="font-semibold text-blue-700">Father:</span> {entry.father}</p>
                <p><span className="font-semibold text-blue-700">Mother:</span> {entry.mother}</p>
                <p><span className="font-semibold text-blue-700">Age:</span> {entry.age}</p>
                <p><span className="font-semibold text-blue-700">Country:</span> {entry.country}</p>
                <div className="flex gap-2 pt-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-white font-semibold transition"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-white font-semibold transition"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormValidation;
