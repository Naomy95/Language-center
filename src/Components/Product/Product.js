import React from 'react'
import { Card } from 'react-bootstrap';
import './Product.css'
import {useNavigate} from 'react-router'

const Product = (props) => {
    console.log(props)
    const {name,img,price}= props.product;
    const navigate = useNavigate();
    
    const handleReview =() =>{
        navigate('/login')
    }


    return (
        <div className='all-products col-lg-4'>
        
           <Card className="product" style={{ width: '20rem'}}>
  <Card.Img className="mx-auto" variant="top" src={img} />
  <Card.Body>
    <Card.Title className="title-color">{name}</Card.Title>
    <Card.Text>
    <p className='text-color'>$ {price} </p>
     
    </Card.Text>
<button 
 onClick={handleReview}
className='btn-add'>Add to list
</button>
    </Card.Body>
</Card>
           </div>
          
    
    )
}

export default Product;
