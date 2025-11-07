import React from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './cartwidget.css'

export default function CartWidget(){
  const { totalUnits } = useCart()

  return (
    <Link to="/cart" className="cart-widget position-relative d-inline-flex align-items-center">
      {/* SVG inline — nítido, escalable y sin archivos externos */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="cart-icon"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 6H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 14H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5M3.102 7l1.313 6h8.17l1.313-6z"/>
        <path d="M5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg>

      {totalUnits > 0 && (
        <span className="badge bg-danger position-absolute translate-middle top-0 start-100">
          {totalUnits}
        </span>
      )}
    </Link>
  )
}
