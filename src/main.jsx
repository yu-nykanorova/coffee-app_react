import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './pages/home/Home.jsx'
import { About } from './pages/about/About.jsx'
import { ApiProvider } from './ApiProvider.jsx'

const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
