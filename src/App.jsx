import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Player from './Pages/Player/Player';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './Components/Firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppRoutes() {
  // const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("Logged In");
  //       navigate("/", { replace: true }); // Added replace: true for navigation
  //     } else {
  //       console.log("Logged Out");
  //       navigate("/login", { replace: true }); // Added replace: true for navigation
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, [navigate]);

  // if (loading) {
  //   return <div>Loading...</div>; // Show a loading state while checking authentication
  // }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/Netflix-clone" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
