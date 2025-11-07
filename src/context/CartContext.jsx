import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = { items: [] }

function reducer(state, action){
  switch(action.type){
    case 'ADD_ITEM': {
      const { product, qty } = action.payload
      const exists = state.items.find(i => i.id === product.id)
      if(exists){
        const items = state.items.map(i => i.id === product.id ? { ...i, qty: Math.min(i.stock, i.qty + qty), subtotal: Math.min(i.stock, i.qty + qty) * i.price } : i)
        return { ...state, items }
      }
      const newItem = { id: product.id, title: product.title, price: product.price, image: product.image || '/images/placeholder.png', stock: product.stock || 0, qty, subtotal: product.price * qty }
      return { ...state, items: [...state.items, newItem] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) }
    case 'UPDATE_QTY': {
      const { id, qty } = action.payload
      const items = state.items.map(i => i.id === id ? { ...i, qty, subtotal: i.price * qty } : i)
      return { ...state, items }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (product, qty) => dispatch({ type: 'ADD_ITEM', payload: { product, qty }})
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const updateQty = (id, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty }})
  const clearCart = () => dispatch({ type: 'CLEAR_CART'})

  const totalUnits = state.items.reduce((s,i) => s + i.qty, 0)
  const totalPrice = state.items.reduce((s,i) => s + i.subtotal, 0)

  return (
    <CartContext.Provider value={{ cart: state, addItem, removeItem, updateQty, clearCart, totalUnits, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
