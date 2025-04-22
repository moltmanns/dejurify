'use client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Builder from './pages/Builder/page'
import Index from './pages/Index/page'
import NotFound from './pages/NotFound/page'
import Preview from './pages/Preview/page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />
      }
    ]
  },
  {
    path: '/builder',
    element: <Builder />
  },
  {
    path: '/preview/:slug',
    element: <Preview />
  }
])

export default function BuilderPage() {
  return <RouterProvider router={router} />
}
