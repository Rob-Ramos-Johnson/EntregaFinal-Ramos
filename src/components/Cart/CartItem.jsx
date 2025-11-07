import React from 'react'

export default function CartItem({ item, onRemove, onUpdate }) {
  return (
    <div className="card shadow-sm h-100">
      <img 
        src={item.image} 
        alt={item.title} 
        className="card-img-top" 
        style={{ height: 180, objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted">Precio: ${item.price}</p>
        <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
          <button className="btn btn-outline-secondary btn-sm" onClick={() => onUpdate(Math.max(1, item.qty - 1))}>-</button>
          <span>{item.qty}</span>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => onUpdate(Math.min(item.stock, item.qty + 1))}>+</button>
        </div>
        <p className="fw-bold">Subtotal: ${item.subtotal}</p>
        <button className="btn btn-outline-danger btn-sm" onClick={onRemove}>Eliminar</button>
      </div>
    </div>
  )
}
