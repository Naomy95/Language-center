
import React, { useEffect,useState } from 'react';
import Product from '../Product/Product';
import './Services.css'



const Services = () => {
    const[products,setProducts] = useState([])
  
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (

       <div className='service-container'>
            <h1 className='product-text'>Our Popular Services</h1>
            <div className='product-container row'>
             
            {
                products.map(product =><Product
                    id={product.id}
                    product={product}
                   
                    ></Product>)
            }
        </div>
       </div>
    )
}

export default Services
