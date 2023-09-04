"use client"
import React, { useEffect, useState } from 'react';

const page = () => {
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data.products))
    },[])
    return (
        <div>
            {
                product.map(index=><div key={index.id}>
{index.title}
<div>{index.description}</div>
<image src={index.images[0]}  alt="my_image"/>
                </div>)
            }
        </div>
    );
};

export default page;