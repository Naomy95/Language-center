import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import 'react-bootstrap'
import './Footer.css'

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faFacebook} />
    const element2 = <FontAwesomeIcon icon={faInstagram} />
    const element3=<FontAwesomeIcon icon ={faTwitter} />

    return (
        <div className='footer-container row'>
            <div className='contact-address'>
                <h2>Contact Us</h2>
                <h3>Language Center</h3>
                <h3>82 Baridhara, Dhaka</h3>
                <p>Phone: 123456789</p>
            </div>

            <div className='social-media'>
                <h3>Or Find us in Social Media</h3>
                <a href="">{element3}</a>
                <a href="">{element2}</a>
                <a href="">{element1}</a>
            </div>
        </div>
    )
}

export default Footer
