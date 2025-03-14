import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <BrowserRouter basename='/media/'>  
       <App/>
       <Toaster />
    </BrowserRouter>
  </AppContextProvider>
)
