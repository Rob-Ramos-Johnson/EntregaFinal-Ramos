import { db } from './firebaseConfig'
import { collection, getDocs, getDoc, doc, query, where, addDoc } from 'firebase/firestore'
import mockProducts from '../data/mockProducts'

const productsCol = collection(db, 'products')

export async function fetchAllProducts(){
  try{
    const snap = await getDocs(productsCol)
    if(snap.empty) return mockProducts
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  }catch(err){
    console.warn('Firestore error, using mock:', err.message)
    return mockProducts
  }
}

export async function fetchProductsByCategory(category){
  try{
    const q = query(productsCol, where('category','==',category))
    const snap = await getDocs(q)
    if(snap.empty) return mockProducts.filter(p => p.category === category)
    return snap.docs.map(d => ({ id: d.id, ...d.data() }))
  }catch(err){
    console.warn('Firestore error, using mock by category:', err.message)
    return mockProducts.filter(p => p.category === category)
  }
}

export async function fetchProductById(id){
  try{
    const docRef = doc(db,'products',id)
    const docSnap = await getDoc(docRef)
    if(!docSnap.exists()){
      const fallback = mockProducts.find(p => p.id === id)
      if(!fallback) throw new Error('Producto no encontrado')
      return fallback
    }
    return { id: docSnap.id, ...docSnap.data() }
  }catch(err){
    console.warn('Firestore error, using mock by id:', err.message)
    const fallback = mockProducts.find(p => p.id === id)
    if(!fallback) throw err
    return fallback
  }
}

export async function createOrder(orderData){
  try{
    const ordersCol = collection(db, 'orders')
    const res = await addDoc(ordersCol, orderData)
    return res.id
  }catch(err){
    console.error('Error creating order:', err)
    throw err
  }
}
