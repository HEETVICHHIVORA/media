import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './context/AppContext.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <BrowserRouter>
        <App/>
       <Toaster />
    </BrowserRouter>
  </AppContextProvider>
);
