import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function ItemDetail({ product }){
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = (qty) => { addItem(product, qty); setAdded(true) }

  return (
    <div className='detail d-flex gap-4'>
      <img src={product.image || '/images/placeholder.png'} alt={product.title} className='detail-img' style={{width:320,height:320,objectFit:'cover'}}/>
      <div className='detail-info'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className='fw-bold'>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>

        {!added ? (
          product.stock > 0 ? <ItemCount stock={product.stock} initial={1} onAdd={handleAdd}/> : <p className='text-danger'>Producto sin stock</p>
        ) : (
          <div>
            <p className='text-success'>Producto agregado al carrito ✅</p>
            <Link to='/cart' className='btn btn-primary'>Ir al carrito</Link>
          </div>
        )}
      </div>
    </div>
  )
}
