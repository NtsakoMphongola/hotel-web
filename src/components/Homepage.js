import React from 'react';
import homepic from '../assets/Block6.jpg';
import logo from '../assets/logo.png';

function Homepage() {
  return (
    <>
      <section className='header'>
        <header>
          <div className='container flxe1'><img src={logo} className='logo-img' alt='logo image' />
            <nav class="navbar flex1">
              <ul className='nav-menu'>
               <a href="#Home">Home</a> 
               <a href="#about">About us</a> 
               <a href="#contact">Contact us</a> 
               <a href="#bookings">Bookings</a> 
               <a href="#Login">Login</a> 
               <a href="#Register">Register</a> 
              </ul>
            </nav>
          </div>
        </header>
      </section>
    
    <img src={homepic} className='home-img' alt="home image" />
    <h1>Mphongola Hotel</h1>
    <section class="room wrapper2 top" id="room">
    <div class="container">
      <div class="heading">
        <h5>OUR ROOMS</h5>
        <h2>Fascinating rooms & suites </h2>
      </div>
      <div class="content flex mtop">
        <div class="left grid2">
          <div class="box">
            <i class="fas fa-desktop"></i>
            <p>Free Cost</p>
            <h3>No booking fee</h3>
          </div>
          <div class="box">
            <i class="fas fa-dollar-sign"></i>
            <p>Free Cost</p>
            <h3>Best rate guarantee</h3>
          </div>
          <div class="box">
            <i class="fab fa-resolving"></i>
            <p>Free Cost</p>
            <h3>Reservations 24/7</h3>
          </div>
          <div class="box">
            <i class="fal fa-alarm-clock"></i>
            <p>Free Cost</p>
            <h3>High-speed Wi-Fi</h3>
          </div>
          <div class="box">
            <i class="fas fa-mug-hot"></i>
            <p>Free Cost</p>
            <h3>Free breakfast</h3>
          </div>
          <div class="box">
            <i class="fas fa-user-tie"></i>
            <p>Free Cost</p>
            <h3>One person free</h3>
          </div>
        </div>
        <div class="right">
          <img src="image/r.jpg" alt=""/>
        </div>
      </div>
    </div>
  </section>

    {/* Booking systems/process */}
    {/* <section class="home" id="home">
    <div class="container">
      <h1>Make Memories</h1>
      <p>Discover the place where you have fun & enjoy a lot</p>

      <div class="content grid">
        <div class="box">
          <span>ARRIVAL DATE </span> 
          <input type="date" placeholder="29/20/2021" />
        </div>
        <div class="box">
          <span>DEPARTURE DATE </span> 
          <input type="date" placeholder="29/20/2021" />
        </div>
        <div class="box">
          <span>ADULTS</span> 
          <input type="number" placeholder="01" />
        </div>
        <div class="box">
          <span>CHILDREN </span> 
          <input type="number" placeholder="01"/>
        </div>
        <div class="box">
          <button class="flex1">
            <span>Check Availability</span>
            <i class="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section> */}

    </>
  )
}

export default Homepage;