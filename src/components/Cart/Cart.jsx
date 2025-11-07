import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'

export default function Cart() {
  const { cart, removeItem, updateQty, totalPrice, clearCart } = useCart()

  if (!cart.items.length) {
    return (
      <div className="text-center mt-5">
        <h4>🛒 Tu carrito está vacío</h4>
        <Link to="/" className="btn btn-primary mt-3">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">🛍️ Tu carrito</h2>

      <div className="row g-3">
        {cart.items.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <CartItem 
              item={item} 
              onRemove={() => removeItem(item.id)} 
              onUpdate={q => updateQty(item.id, q)} 
            />
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <h4>Total: ${totalPrice}</h4>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
          <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        </div>
      </div>
    </div>
  )
}
