import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './SingleProduct.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const SingleProduct = () => {
    const {id} =useParams()
    const navigate= useNavigate()
    //store product data coming in object

    const [product,setProduct]=useState({});

    //for delete
    const deleteProduct= async ()=>{
      const response = await axios.delete("https://66d957b54ad2f6b8ed5443ad.mockapi.io/products/" + id)

      if(response.status=200){
        navigate("/")
      }else{
        alert("Something went wrong. Try again")
      }
    }

    //fetch single product
    const fetchSingleProduct = async ()=>{
    const response = await axios.get("https://66d957b54ad2f6b8ed5443ad.mockapi.io/products/" + id)
    setProduct(response.data)
    
    }
 useEffect(()=>{
        fetchSingleProduct()
    },[])
  return (
    <>
    <Navbar/>

    <div className="card">
        <img src={product.productImage} alt="product image" />
        <h2 className='product-name'>{product.productName}</h2>
        <p className='product-description'>{product.productDescription}</p>
        <mark>{product.productMaterial}</mark> <br/>
        <button className='delete-button' onClick={deleteProduct}>Delete</button>
        <button className='edit-button' onClick={()=>navigate(`/editProduct/${id}`)}>Edit</button>
    </div>
    </>
  )
}
