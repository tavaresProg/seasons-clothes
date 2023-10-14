import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './routes/Home'
import ProductDetails from './routes/ProductDetails'

//Contexts
import { ProductProvider } from './contexts/ProductContext';
import { SidebarProvider } from './contexts/SidebarContext'
import { CartProvider } from './contexts/CartContext'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>

)
