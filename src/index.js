import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './root.styles.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={ appRouter }>
      <App />
    </RouterProvider>
  </React.StrictMode>
)