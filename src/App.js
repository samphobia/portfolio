import React from 'react'
import { Header } from './components/home/header/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Homepage } from './components/pageContent/Homepages'
import Footer from './components/home/Footer'

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route  index element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App