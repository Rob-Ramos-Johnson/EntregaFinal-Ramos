import React, { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { createOrder } from '../../services/productsService'
import { useNavigate } from 'react-router-dom'

export default function CheckoutForm(){
  const { cart, totalPrice, clearCart } = useCart()
  const [form, setForm] = useState({ name:'', email:'', address:'' })
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const navigate = useNavigate()

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!cart.items.length) return alert('Carrito vacío')
    setLoading(true)
    const order = { buyer: form, items: cart.items, total: totalPrice, date: new Date().toISOString() }
    try{
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    }catch(err){
      console.error(err)
      alert('Error creando la orden')
    }finally{
      setLoading(false)
    }
  }

  if(orderId) return (
    <div className='text-center mt-4'>
      <h2>Compra confirmada</h2>
      <p>Tu ID de orden es: <strong>{orderId}</strong></p>
      <button className='btn btn-primary' onClick={()=> navigate('/')}>Volver al inicio</button>
    </div>
  )

  return (
    <div>
      <h2>Checkout</h2>
      <form className='checkout-form d-flex flex-column gap-2' onSubmit={handleSubmit}>
        <input name='name' value={form.name} onChange={handleChange} placeholder='Nombre' required/>
        <input name='email' type='email' value={form.email} onChange={handleChange} placeholder='Email' required/>
        <input name='address' value={form.address} onChange={handleChange} placeholder='Dirección' required/>
        <button className='btn btn-success' type='submit' disabled={loading}>{loading ? 'Procesando...' : `Pagar $${totalPrice}`}</button>
      </form>
    </div>
  )
}
