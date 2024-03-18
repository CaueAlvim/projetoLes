import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages'
import DetalheProduto from './pages/DetalheProduto';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/detalhes-produto/:id",
    element: <DetalheProduto/>
  },
  {
    path: "/carrinho",
    element: <Carrinho/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <RouterProvider router={router} />
  </React.StrictMode>,
)