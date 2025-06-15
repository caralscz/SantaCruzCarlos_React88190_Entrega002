//  import { StrictMode } from 'react'    // quitamos para las pruebas
import { createRoot } from 'react-dom/client'
// import './index.css'   // nos manejamos el css desde App.css 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // quitamos para las pruebas
    <App />,
  // </StrictMode> // quitamos para las pruebas
)
