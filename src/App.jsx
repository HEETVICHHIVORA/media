import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Services } from './pages/Services'
import { Services2 } from './pages/Services2'
import { Services3 } from './pages/Services3'

function App() {

  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/services2" element={<Services2/>} />
        <Route path="/services3" element={<Services3/>} />
      </Routes>
    </div>
  )
}

export default App
