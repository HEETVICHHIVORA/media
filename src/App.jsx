import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Services } from './pages/Services'
import {Contactus} from './pages/Contactus';
import BlogPage from './pages/BlogPage';
import AboutMediatryx from './pages/Aboutmediatryx'
function App() {

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/services/contactus/:service" element={<Contactus />} />
        <Route path="/aboutmediatryx"  element={<AboutMediatryx/>} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  )
}

export default App
