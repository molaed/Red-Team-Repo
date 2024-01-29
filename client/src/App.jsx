import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './provider/AuthContext';
import './styles.css';
import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Clubs from './pages/Clubs.jsx';
import Admin from './pages/admin/Admin.jsx';
import EventDetails from './pages/EventDetails.jsx';

export default function App() {
  return (
    <>
      <AuthProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/eventdetails' element={<EventDetails />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
