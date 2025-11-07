import React from 'react'
import { CartProvider } from './context/CartContext'
import AppRouter from './routes/AppRouter'
import Footer from './components/Footer/footer.jsx' // 👈 Importamos el footer
import './styles/components.css'

export default function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <AppRouter />
        <Footer /> {/* 👈 Footer agregado al final */}
      </div>
    </CartProvider>
  )
}
