import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContextProvider from './context/ContextProvider.jsx'
import App from './App.jsx'
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
createRoot(document.getElementById('root')).render(
 <ContextProvider>
 <StrictMode>
    <App />
  </StrictMode>,
  </ContextProvider>
)
