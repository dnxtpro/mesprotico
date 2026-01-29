
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Services from './components/services'
import Footer from './components/footer'

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
