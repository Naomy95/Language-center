import React from 'react'
import "./Home.css"
import  { useEffect,useState } from 'react';

import Product from '../Product/Product';

import Footer from '../Footer/Footer';





const Home = () => {
    const[products,setProducts] = useState([])
  
   
  
    useEffect(() => {
        fetch('./tools1.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
             
            });
    }, []);
 

   
    return (
        
              <div className='home-container'>
                  <div className='image-container'>
           
           <img src='image1.jpg' className='img' image />
           
          
              <h1 className='header-text'>Join Our<br />
              Professionals To Improve <br /> Yourself</h1>
              <br />
              <br />
              </div>
            
           <div className='products'>
           <h1 className='products-text'>Our Popular Services</h1>
           <hr style={{width:'100px', color:'blue' }} />
           <div className='popular-products row'>
            
            {
            products.map(product =><Product product={product}></Product>)
            }
        </div>
           </div>

           <Footer></Footer>
           </div>
         
    )
}

export default Home
