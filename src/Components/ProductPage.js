import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const ProductPage=()=>{
    const [user , setUser]=useState(null);

    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>setUser(response.data.products))
        .catch((err)=>console.log("error", err))
        
    },[]);


    console.log(user);

    return(
        <div>
           {user &&
            user.map((product)=>(
                <div className="productContainer" key={product.id}>
                    <p>{product.brand}</p>
                </div>
            ))
           }
        </div>
    )
}

export default ProductPage;