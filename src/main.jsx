import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { UserProvider } from './utils/UserContext'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <UserProvider>
    <App />
  </UserProvider>
  // </StrictMode>,
)
