import { useState } from 'react'
import './styles.css'
import Navbar from './Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'

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
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  )
}
