
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Bolg from './components/Blog/Blog'
import Gallery from './components/Gallery/Gallery'
import Menu from './components/Menu/Menu'
import Reservation from './components/Reservation/Reservation'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Bolg />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
