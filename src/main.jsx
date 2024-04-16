import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Home } from './pages/home/Home.jsx'
import { About } from './pages/about/About.jsx'
import { Favorites } from './pages/favorites/Favorites.jsx'
import { Cart } from './pages/cart/Cart.jsx'
import { Notification } from './pages/notification/Notification.jsx'
import { ApiProvider } from './ApiProvider.jsx'
import { NotFound } from './shared/components/NotFound/NotFound.jsx'
import { Login } from './pages/auth/Login.jsx' 
import { DrinkPage } from './pages/drinks/DrinkPage.jsx'
import { DrinksList } from './pages/home/components/DrinksList/DrinksList.jsx'
import { BeansList } from './pages/home/components/BeansList/BeansList.jsx'
import { BeanPage } from './pages/beans/BeanPage.jsx'

const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <DrinksList />,
      },
      {
        path: "/drinks/:id",
        element: <DrinkPage />,
      },
      {
        path: "/",
        element: <BeansList />,
      },
      {
        path: "/beans/:id",
        element: <BeanPage />,
      },
      {
        path: "/auth",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
