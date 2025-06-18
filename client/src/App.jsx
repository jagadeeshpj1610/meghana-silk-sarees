import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
// import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import UploadSaree from './components/upload';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch("http://localhost:8000/auth/isLoggedIn", {
        credentials: "include"
      });
      const text = await response.json();
      console.log(text);
      
      setIsLoggedIn(text.isLoggedIn);
    };
    fetchFunc();
  }, []);

  if (isLoggedIn === null) return <h1>Loading...</h1>;

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isLoggedIn && <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />}
        {!isLoggedIn && <Route path="/signup" element={<Signup />} />}
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path='/addNewSaree' element = {<UploadSaree /> } />
      </Routes>
    </Router>
  );
}
export default App;