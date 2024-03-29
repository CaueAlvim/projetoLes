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
import UserHome from './pages/UserHome';
import FinalizacaoCompra from './pages/FinalizacaoCompra';

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
  {
    path: "/home",
    element: <UserHome/>
  },
  {
    path: "/finalizacao",
    element: <FinalizacaoCompra/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <RouterProvider router={router} />
  </React.StrictMode>,
)