import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../containers/ItemListContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import CheckoutForm from '../components/Checkout/CheckoutForm'

export default function AppRouter(){
  return (
    <BrowserRouter>
      <NavBar />
      <main className='container mt-4'>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm />} />
          <Route path='*' element={<h2 style={{textAlign:'center'}}>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
