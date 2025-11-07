import React, { useState } from 'react'

export default function ItemCount({ stock=0, initial=1, onAdd }){
  const [qty, setQty] = useState(initial)
  const inc = () => setQty(q => Math.min(stock, q+1))
  const dec = () => setQty(q => Math.max(1, q-1))

  return (
    <div className='item-count'>
      <div className='d-flex align-items-center gap-2 mb-2'>
        <button className='btn btn-outline-secondary btn-sm' onClick={dec} disabled={qty<=1}>-</button>
        <span>{qty}</span>
        <button className='btn btn-outline-secondary btn-sm' onClick={inc} disabled={qty>=stock}>+</button>
      </div>
      <button className='btn btn-success' onClick={() => onAdd(qty)} disabled={stock===0}>Agregar al carrito</button>
      {stock===0 && <p className='text-danger mt-2'>Sin stock</p>}
    </div>
  )
}
