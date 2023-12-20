import React from 'react'
import { Routes,Route } from 'react-router-dom'


import Taskmanager from '../pages/Taskmanager/Taskmanager'


const Home = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Taskmanager/>}/>
      </Routes>
    </div>
  )
}

export default Home
