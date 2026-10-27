import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Phase 1 placeholder; Phase 2 replaces this with the journal.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p style={{ fontFamily: 'Caveat, cursive', fontSize: 40 }}>field journal: setup done</p>
  </StrictMode>,
)
