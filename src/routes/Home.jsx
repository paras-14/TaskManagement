import React from 'react'
import { Routes,Route } from 'react-router-dom'
import TestComponent from '../pages/TestComponents/TestComponent'
import LandingPage from '../pages/LandingPage/LandingPage'


const Home = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
          <Route path="/test" element={<TestComponent/>}/>
      </Routes>
    </div>
  )
}

export default Home
