import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index from './pages'
import DetalheProduto from './pages/DetalheProduto';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/detalhes-produto/:id",
    element: <DetalheProduto />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <RouterProvider router={router} />
  </React.StrictMode>,
)