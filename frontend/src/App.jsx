

import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App