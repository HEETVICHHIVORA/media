import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { Services } from './pages/Services'

function App() {

  return (
    <div className='w-screen h-screen'>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  )
}

export default App
