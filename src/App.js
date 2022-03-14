import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import Error from './components/Error'

import EstateInfo from './components/EstateInfo'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/agent/:id' element={<EstateInfo />} />
      </Routes>
    </Router>
  )
}

export default App
