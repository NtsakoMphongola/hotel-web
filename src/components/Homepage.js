import React from 'react';
import homelogo from '../assets/Block6.jpg';
import 


function Homepage() {
  return (
    <>
    
    <section>
        <div className='container flxe1'>
            <img src={homelogo} className="homelog" />
            <div className='navbar'>
            <ul class="nav-menu">
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#about">about</a> </li>
            <li> <a href="#room">room</a> </li>
            <li> <a href="#services">services</a> </li>
            <li> <a href="#shop">shop</a> </li>
            <li> <a href="#testimonials">testimonials</a> </li>
            <li> <a href="#gallary">gallary</a> </li>
            <li> <a href="#blog">blog</a> </li>
            <li> <a href="#contact">contact</a> </li>
          </ul>
            </div>
        </div>
    </section>
    <h1>Mphongola Hotel</h1>
    </>
  )
}

export default Homepage;