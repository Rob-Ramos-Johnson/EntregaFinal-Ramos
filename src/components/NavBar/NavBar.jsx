import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

export default function NavBar(){
  return (
    <header className='navbar bg-primary'>
      <div className='container d-flex align-items-center justify-content-between py-2'>
        <Link to='/' className='text-white h4 text-decoration-none'>Tienda Mística</Link>
        <nav>
          <Link to='/products' className='text-white me-3 text-decoration-none'>Catálogo</Link>
          <Link to='/category/velas' className='text-white me-3 text-decoration-none'>Velas</Link>
          <Link to='/category/incienso' className='text-white me-3 text-decoration-none'>Inciensos</Link>
          <Link to='/category/piedras' className='text-white me-3 text-decoration-none'>Piedras</Link>
        </nav>
        <Link to='/cart'><CartWidget/></Link>
      </div>
    </header>
  )
}
