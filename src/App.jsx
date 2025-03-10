import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Services } from './pages/Services'
import { Services2 } from './pages/Services2'
import { Services3 } from './pages/Services3'
import {Contactus} from './pages/Contactus';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import AboutMediatryx from './pages/Aboutmediatryx'
function App() {

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services2" element={<Services2/>} />
        <Route path="/services3" element={<Services3/>} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="services/contactus/:service" element={<Contactus />} />
        <Route path="/aboutmediatryx"  element={<AboutMediatryx/>} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  )
}

export default App
