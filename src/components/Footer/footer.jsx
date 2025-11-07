import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tienda Mística — Todos los derechos reservados 🌙</p>
    </footer>
  )
}
