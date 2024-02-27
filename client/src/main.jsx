import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline></CssBaseline>
    <Index/>
  </React.StrictMode>,
)