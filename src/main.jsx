import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Navbar/>
        <App />
    </HashRouter>
  </React.StrictMode>,
)
