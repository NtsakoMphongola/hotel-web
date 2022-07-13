import React from 'react';
import homepic from '../assets/Block6.jpg';
import logo from '../assets/logo.png';
import D from '../assets/Deluxe.jpg';
import V from '../assets/Vip.jpg';

function Homepage() {
  return (
    <>
    <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
      <header className='header'>
        <div className='container flxe1'>
          <img src={logo} className='logo-img' alt='logo image' />
          <nav className="navbar flex1">
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
    
    <img src={homepic} className='home-img' alt="home image" />

    <section className="offer mtop" id="services">
      <div className="container">
        <div className="heading">
          <h5>Check out Our Rooms </h5>
        </div>
        
        <div className="content grid2 mtop">
          <div className="box flex">
            <div className="left">
              <img src={D} alt="" />
            </div>
            <div className="right">
              <h4>Deluxe Room</h4>
              <p> Just 12 private Deluxe rooms ensures a quiet, relaxing stay.</p>
              <h5>From R1 995 Per Room Per Night</h5>
              <button className="flex1"> <span>View</span> </button>
            </div>
          </div>
          
          <div className="box flex">
            <div className="left">
              <img src={V} alt="" />
            </div>
            <div className="right">
              <h4>VIP Room</h4>
              <p> Exclusive with only 4 VIP Rooms. </p>
              <h5>From R2 080 Per Room Per Night</h5>
              <button className="flex1"> <span>View</span> </button>
            </div>
          </div>

          <div className="box flex">
            <div className="left">
              <img src={V} alt="" />
            </div>
            <div className="right">
              <h4>Luxury Room</h4>
              <p> Just 35 private luxury rooms ensures a quiet, relaxing stay. </p>
              <h5>From R2 165 Per Room Per Night</h5>
              <button className="flex1"> <span>View</span> </button>
            </div>
          </div>

          <div className="box flex">
            <div className="left">
              <img src={V} alt="" />
            </div>
            <div className="right">
              <h4>Luxury Suites</h4>
              <p> Just 35 private luxury rooms ensures a quiet, relaxing stay. </p>
              <h5>From R2 575 Per Room Per Night</h5>
              <button className="flex1"> <span>View</span> </button>
            </div>
          </div>
        
        </div>
      </div>
    </section>

    {/* <section class="room wrapper2 top" id="room">
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
  </section> */}

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
  </body>
    </>
  )
}

export default Homepage;