import React from 'react'
import Navbar from './assets/Component/Navbar'
import Laftside from './assets/Component/Laftside'
import Rightside from './assets/Component/Rightside'
import Card from './assets/Component/Card'
import Exchange from './assets/Component/Exchange'
import MoonPay from './assets/Component/MoonPay'
import Powering from './assets/Component/Powering'
import Animatino from './assets/Component/Animatino'
import Footer from './assets/Component/Footer'
const App = () => {
  return (
    <div className='bg-black text-white'>
        <Navbar />
        <Laftside />
        <Rightside />
        <Exchange />
        <Card />
        <MoonPay/>
        <Animatino />
        <Powering />
        <Footer />
    </div>
  )
}

export default App