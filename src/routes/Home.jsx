import React from 'react'
import { Routes,Route } from 'react-router-dom'
import TestComponent from '../pages/TestComponents/TestComponent'


const Home = () => {
  return (
    <div>
      <Routes>
          <Route path="/test" element={<TestComponent/>}/>
      </Routes>
    </div>
  )
}

export default Home
