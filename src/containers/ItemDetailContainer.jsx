import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import { fetchProductById } from '../services/productsService'

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetchProductById(id).then(p => setProduct(p)).catch(()=>{}).finally(()=> setLoading(false))
  },[id])

  if(loading) return <p style={{textAlign:'center'}}>Cargando detalle...</p>
  if(!product) return <p style={{textAlign:'center'}}>Producto no encontrado.</p>

  return <ItemDetail product={product} />
}
