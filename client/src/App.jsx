import { useState } from 'react'
import './styles.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Clubs from './pages/Clubs.jsx'
import Admin from './pages/admin/Admin.jsx'
import EventDetails from './pages/EventDetails.jsx'

export default function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about-us":
      Component = About
      break
    case "/login":
      Component = Login
      break
    case "/clubs":
      Component = Clubs
      break
    case "/admin": // testing purposes
      Component = Admin
      break
    case "/eventdetails": // testing purposes
      Component = EventDetails
      break
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  )
}
