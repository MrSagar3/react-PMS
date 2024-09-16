import React, { useEffect, useState } from 'react'
import './Home.css'
import { Navbar } from '../../components/Navbar/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Home = () => {

  const [products,setProducts]=useState([])

  const fetchProducts= async()=>{
    const response = await axios.get("https://66d957b54ad2f6b8ed5443ad.mockapi.io/products")
    setProducts(response.data)
  }

    useEffect(()=>{
      fetchProducts()
    },[])
  return (
    <>
    <Navbar/>
    <div className="card-container">
     {
      products.map((product)=>{
        return (
          <div key={product.id} className="card">
    <img src={product.productImage} alt="Product Image" className="card-image" />
    <div className="card-container">
      <h2 className="product-name">{product.productName}</h2>
      <p className="product-description">{product.productDescription}</p>
    </div>
    <Link to={`/singleProduct/${product.id}`}>See More</Link>
    </div>

        )
      })
     }
     </div>
    </>
   
  )
}

export default Home
