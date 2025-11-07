import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList/ItemList'
import { fetchAllProducts, fetchProductsByCategory } from '../services/productsService'

export default function ItemListContainer(){
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    const fetcher = categoryId ? fetchProductsByCategory : fetchAllProducts
    fetcher(categoryId).then(data => setItems(data)).catch(()=>{}).finally(()=> setLoading(false))
  },[categoryId])

  if(loading) return <p style={{textAlign:'center'}}>Cargando productos...</p>
  if(!items.length) return <p style={{textAlign:'center'}}>No hay productos disponibles.</p>

  return <ItemList items={items} />
}
