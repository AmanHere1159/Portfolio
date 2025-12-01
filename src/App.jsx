import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Skills from './Skills'
import Education from './Education'
import Project from './Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Skills' element={<Skills/>}/>
     <Route path='/Education' element={<Education/>}/>
     <Route path='/Projects' element={<Project/>}/>
     </Routes>
     </BrowserRouter>
     {/* <TestingRes/> */}
     {/* <Home/> */}
     {/* <Skills/> */}
     {/* <Contact/> */}
     {/* <Project/> */}
     {/* <Education/> */}
    </>
  )
}

export default App
