import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import'./AddProduct.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"


export const AddProduct = () => {
const navigate = useNavigate()

const [data,setData]=useState({
    productName: "",
    productImage: "",
    productDescription: "",
    productMaterial: ""
})

const handleChange = (e)=>{
     const {name,value} = e.target
           setData({
               ...data,
               [name] : value
           })
          
}
   
const addProduct =async (e)=>{
    e.preventDefault()
    const response=await axios.post("https://66d957b54ad2f6b8ed5443ad.mockapi.io/products",data)
    if(response.status == 201){
        navigate("/")
       }else{
         alert("Something went wrong.Try Again")
       }
      
}

  return (
   <>
   <Navbar/>
   <div class="form-container">
        <h2>Product Information form</h2>
        <form onSubmit={addProduct}>
    
            <div className="form-group">
                <label htmlFor="productName">Product Name</label>
                <input type="text" id="productName" name="productName" placeholder="Enter the name of product" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="productImage">Product Image</label>
                <input type="text" id="productImage" name="productImage" placeholder="Enter the link of image" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="productDescription">Product Description</label>
                <textarea id="productDescription" name="productDescription" rows="4" placeholder="Enter product description" onChange={handleChange}></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="productMaterial">Product Material</label>
                <input type="text" id="productMaterial" name="productMaterial" placeholder="Enter product material" onChange={handleChange}/>
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>

   </>
  )
}
