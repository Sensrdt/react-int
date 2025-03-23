import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from '../context/Todo.jsx'
import { CatelougeProvider } from './context/Catelouge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CatelougeProvider>
      <App />
    </CatelougeProvider>
  </StrictMode>,
)
