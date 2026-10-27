import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Journal from './Journal'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Journal />
  </StrictMode>,
)
