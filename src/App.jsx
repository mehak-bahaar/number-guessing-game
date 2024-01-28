import { useState } from 'react'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Game from "./Components/Game/Game"
import Instructions from './Components/Instructions/Instructions'
import Home from './Components/Home/Home'
function App() {

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/instructions' element={<Instructions />} />
      </Routes>
    </div>
  )
}

export default App
