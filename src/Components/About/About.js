import React from 'react'
import './About.css'
import YouTube from 'react-youtube'
import Footer from '../Footer/Footer'




const About = () => {
    return (
        <div>
            <div className='about-container'>
                <h1>About Us</h1>
                <p>
                   Language Center is a home for Web-Developers and Programmers. We have courses made and inspected by proffesionals. Thousands of students have benefitted and we cannot wait to help students to choose their career. So join us to make a difference
                </p>
               <div className='images-container'>
               <img src='image2.jpeg'  />
                <img src='image3.jpg'  />
               </div>
               <br />
               <div className='video-container'>
                 <YouTube url='https://www.youtube.com/watch?v=9JtrCAWiJAc'></YouTube>
               </div>
              
        </div>

        <Footer></Footer>
    
        </div>
    )
}

export default About
