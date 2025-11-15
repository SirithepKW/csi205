import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Components from './pages/Components'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Animation from './pages/Animation'
import UPH from './pages/UnknowPathHandler'
import AppLayOut from './layouts/AppLayOut'
import TodoApps from './pages/Todos'
import ProductsApp from './pages/Products'
import CartsApp from './pages/Carts'
import Login from './pages/Login/LoginPage'
import { useEffect, useState } from 'react'
import { fetchProduct } from './data/productdata'

function App() {
  const [products,setProduct] = useState([])
  const [carts,setCart] = useState([])
  const [tokens,setToken] = useState('')
  const [roles,setRole] = useState('')

  useEffect(() => setProduct(fetchProduct()),[])

  useEffect(() => console.log(products),[products])

  if (tokens === '') {
    return (<Login setToken={setToken} setRole={setRole}/>)
  } else {
  return (
    <BrowserRouter basename='/csi205/'>
      <Routes>
        <Route element={<AppLayOut products={products} carts={carts} setToken={setToken}/>}>
          <Route path='components' element={<Components/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='animation' element={<Animation/>}/>
          <Route path='calculator' element={<Calculator/>}/>
          <Route path='Todo' element = {<TodoApps/>}/>
          <Route path='products' element = {<ProductsApp products={products} carts={carts} setCart={setCart}/>}/>
          <Route path='carts' element = {<CartsApp carts={carts} setCart={setCart}/>}/>
          <Route path='*' element={<UPH/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )}


}

export default App
