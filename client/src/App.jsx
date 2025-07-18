import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import CartPage from './components/myCart';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import UpdateSaree from './components/upload';
import PaymentSuccess from './components/paymentSucess';
import Profile from './components/profile';
import { UserContext } from './components/userContext';
import Search from './components/search';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null)
  const [userDetails, setUserDetails] = useState(null)
  const [hasLoggedOut, setHasLoggedOut] = useState(false);
  const [sarees, setSarees] = useState([]);

  useEffect(() => {
    if (hasLoggedOut) return;

    const fetchStatus = async () => {
      try {
        const loginRes = await fetch("https://meghana-silk-sarees-3ufw.onrender.com/auth/isLoggedIn", {
          credentials: "include"
        });
        const loginData = await loginRes.json();
        setUserDetails(loginData.user);
        setIsLoggedIn(loginData.isLoggedIn);

        const adminRes = await fetch("https://meghana-silk-sarees-3ufw.onrender.com/auth/isAdmin", {
          credentials: "include"
        });
        const adminData = await adminRes.json();
        setIsAdmin(adminData.isAdmin);

        if (!adminRes.ok) {
          setIsAdmin(false);
        }
      } catch (err) {
        console.log("Error checking login/admin status", err);
      }
    };

    fetchStatus();
  }, [isLoggedIn, hasLoggedOut]);


  if (isLoggedIn === null || isAdmin === null) return <h1 style={{ textAlign: 'center' }}>Loading...</h1>;

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, sarees, setSarees }}>
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin} userDetails={userDetails} setHasLoggedOut={setHasLoggedOut} />
        <Routes>
          <Route path="/" element={<Home isAdmin={isAdmin} isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={
            isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
          } />

          <Route path="/signup" element={
            isLoggedIn ? <Navigate to="/" /> : <Signup />
          } />
          <Route path="/cart" element={<CartPage isLoggedIn={isLoggedIn} />} />
          <Route path='/addNewSaree' element={<UpdateSaree />} />
          <Route path="/payment-details/:orderId" element={<PaymentSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
export default App;