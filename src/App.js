import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Counter from './Counter';
import Tweet from './Tweet';
import ApiData from './ApiData';
import UsersData from './UsersData';
import Emoji from './Emoji';
import FormValidation from './FormValidation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path="/apidata" element={<ApiData />} />
        <Route path="/usersdata" element={<UsersData />} />
        <Route path="/emoji" element={<Emoji />} />
        <Route path="/form" element={<FormValidation />} />
      </Routes>
    </Router>
  );
}

export default App;
