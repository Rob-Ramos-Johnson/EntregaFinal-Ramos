import React from 'react'
import Item from './Item'
import './itemlist.css'

export default function ItemList({ items = [] }){
  if(!items.length) return <p className='text-center mt-4'>No hay productos disponibles</p>
  return (
    <div className='item-list'>
      {items.map(p => <Item key={p.id} product={p} />)}
    </div>
  )
}
