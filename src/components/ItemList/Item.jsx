import React from 'react'
import { Link } from 'react-router-dom'
import './itemlist.css'

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <Link to={`/product/${product.id}`}>
          <button>Ver Detalle</button>
        </Link>
      </div>
    </div>
  )
}
