import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import MovieCards from './component/Moviecard'
import SearchBar from './component/Searchbar'
import GenreFilter from './component/Genrefilter'
import Showtime from './component/Showtime'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SeatSelection from './pages/Seatselection'
import Payment from './pages/payment'
import MyBookings from './pages/MyBooking'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      {/* <SearchBar/>
      <GenreFilter/>
      <Showtime/>
      <MovieCards/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieCards/>}/>
        <Route path="/theatres" element={<Showtime/>}/>
        <Route path="/seatselection" element={<SeatSelection/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/mybooking" element={<MyBookings/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
