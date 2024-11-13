import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.js'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    loader: async () => {
      return await fetch('/api/auth/login')
      // .then(res => res.json())
      // .then(data => data)
      // .catch(err => console.error(err))
    }
  },
])