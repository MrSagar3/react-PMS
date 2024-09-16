import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './EditProduct.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const EditProduct = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [product,setProduct]=useState({})
    

    //fetch product of id

    const fetchProduct= async()=>{
        const response= await axios.get("https://66d957b54ad2f6b8ed5443ad.mockapi.io/products/" + id)
        setProduct(response.data)
        
    }

    useEffect(()=>{
        fetchProduct()
    },[])



//handlechange function
const handleChange=(e)=>{
    const {name,value}=e.target
    setProduct({
        ...product,
        [name] :value
    })
}

//edit product function
const editProduct= async(e)=>{
    e.preventDefault()
    const response = await axios.put("https://66d957b54ad2f6b8ed5443ad.mockapi.io/products/" +id,product)
    if(response.status==200){
        navigate("/singleProduct/" + id)
    }else{
        alert("Something went wrong. Try again !")
    }
}

  return (
    <>
     <Navbar/>
   <div class="form-container">
        <h2>Product Edit form</h2>
        <form onSubmit={editProduct}>

            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="productName" value={product.productName} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="productImage">Product Image</label>
                <input type="text" id="productImage" name="productImage" value={product.productImage} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="productDescription">Product Description</label>
                <textarea id="productDescription" name="productDescription" rows="4" value={product.productDescription} onChange={handleChange}></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="productMaterial">Product Material</label>
                <input type="text" id="productMaterial" name="productMaterial" value={product.productMaterial} onChange={handleChange}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default EditProduct