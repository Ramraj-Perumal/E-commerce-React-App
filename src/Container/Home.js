import React from 'react'
import Header from '../Components/Header'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import Product from './Product'
import { CartItem } from './CartItem'
import { Checkout } from './Checkout'
import { Success } from './Success'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<CartItem/>} />
        <Route path='/checkout/'>
          <Route path='' element={<Checkout />} />
          <Route path=':id' element={<Checkout />} />
        </Route>
        <Route path='/success' element={<Success />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Home