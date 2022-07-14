import React from 'react';
// import logo from '../assets/logo.png';
import D from '../assets/Deluxe.jpg';
import V from '../assets/Vip.jpg';
import L from '../assets/L.jpg';
import LS from '../assets/Ls.jpg';
import Ab1 from '../assets/A1.jpg';
import Ab2 from '../assets/A2.jpg';
import R from '../assets/reveiw/unnamed(6).png';
import R1 from '../assets/reveiw/unnamed(2).png';
import R2 from '../assets/reveiw/unnamed(4).png';
import R3 from '../assets/reveiw/unnamed(3).png';
import R4 from '../assets/reveiw/unnamed.png';
import location from '../assets/map.png'

const logoPic = new URL("../assets/logo.png", import.meta.url)

function Homepage() {
  return (
    <>
    <section className='main-container'>
      <header className='header'>
        <div className='container flxe1'>
          <img src={logoPic} className='logo-img' alt='logo' />
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
          <div className='motto'>
            <h3>EXPERIENCE MPHONGOLA HOTEL A PLACE TO CHILL AND CELEBRATE </h3>
          </div>
        </div>
      </header>
    </section>
    <body className='page-top' data-spy="scroll" data-target=".navbar-fixed-top">
      <section className="offer mtop" id="services">
        <div className="container">
          <div className="heading">
            <h1>Check out Our Rooms </h1>
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
                <img src={L} alt="" />
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
                <img src={LS} alt="" />
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
    <hr></hr>
    <section className="about" id="about">
      <div className="container">
        <div className="heading">
          <h1>EXPLORE ABOUT US</h1>
        </div>

        <div className="content flex  top">
          <div className="left">
            <p>At Mphomgola Hotel we are passionate about professional, service-orientated hospitality. 
              This, along with our beautiful facilities and breathtaking natural surroundings, ensures 
              that Mphomgola Hotel is the venue of choice for both the corporate and leisure markets.
              <br></br>
              <br></br>
              Mphomgola Hotel won the prestigious South African Grading Councils - Lilizela Tourism 
              Award 2016, 2017 and 2019 for the 'Best 4-Star Hotel in South Africa' for: 'Setting the 
              benchmark in service excellence, contributing to the industry, investing in skills provision, 
              leading by example and for ensuring that each guest is given a world-class experience in Gauteng'.
              <br></br>
              <br></br>
              The Mphongola Hotel exudes an air of timeless elegance, surrounded by romantic charm that 
              hark back to a bygone era. Although an unassuming exterior from Tottenham Avenue, once you 
              enter our gates, you're whisked away to a nostalgic hotel experience.
              <br></br>
              <br></br>
              Beautifully furnished with bespoke décor, the interior is welcoming and inviting. Unique art
              pieces drawing inspiration from the culturally rich South Africa, are dotted throughout the 
              hotel, creating interesting and inspirational spaces. Walking through our lobby, an atmosphere
              of sophistication and tranquillity is present, exuding a feeling of home away from home.
              <br></br>
              <br></br>
              The establishment pays homage to Sir Hubert Baker's legacy with beautifully crafted architecture. 
              Our central location makes for the perfect stopover retreat for holidaymakers or acts as a prime 
              hub for the discerning business traveller. Efficiently navigate around the city from the hotel to 
              other points of interest within Johannesburg.
              <br></br><br></br>
              <b>#celebratinglife</b>
            </p>
            
          </div>
            <div className="abt">
              <img src={Ab1} alt="" className='abt-img' />
            </div>
            <div className="abt">
              <img src={Ab2} alt="" className='abt-img' />
            </div>
          
        </div>
      </div>
    </section>
    <hr></hr>
    <section classNAme="blog top" id="blog">
      <div className="container">
        <div className="heading">
          <h3>REVIEW</h3>
        </div>

        <div className="content grid mtop">
          <div className="box">
            <div className="img">
              <img src={R4} alt="" />
              <span></span>
            </div>
            <div className="text">
              <h3>Nthabi Mokhonoana</h3>
              <h6>July 2, 2022</h6>
              <p> I love this place. It's quiet magical with good food and lovely team working there. It's my go to place 
                when I need a short break from the city. Great value for money if you get the right room and they keep 
                the rates stable. I'll always go back.. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={R} alt="" />
              <span></span>
            </div>
            <div className="text">
              <h3>Emmanuel Shayamom</h3>
              <h6>June 16, 2022</h6>
              <p> We only went to the restaurant but the food was good and freshly prepared... staff are well trained and 
                friendly. The atmosphere is very peaceful. The entire place is very fancy and nice for functions. ⭐⭐⭐</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={R2} alt="" />
              <span></span>
            </div>
            <div className="text">
              <h3> </h3>
              <p>The breathtaking views of surrounding mountains are a spectacular. Rooms are spacious and elegant. 
                The complementary wine and snacks hamper are a cherry on top. Loved it and would recommend for a getaway around Johannesburg 🙌</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={R3} alt="" />
              <span></span>
            </div>
            <div className="text">
              <h3>Anita Streicher</h3>
              <h6>June 4, 2022</h6>
              <p> Service was absolutely amazing.. Friendly and very helpful staff, excellent food choices and very tasty.. 
                would highly recommend for conferences or team engagements.. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={R1} alt="" />
              <span></span>
            </div>
            <div className="text">
              <h3>Thandi Ngubane</h3>
              <h6>May 25, 2022</h6>
              <p> I really enjoy the view and the service l received, Just want to thank one of your waiters called Xolani Mbatha,,l really enjoy my day to the fullest. ⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </div>
      </div>
    </section>




  <footer>
    <div className="container top">
      <div className="content grid  top">
        <div className="box">
          <h2>Contact Details</h2>
          <ul>
            <li>Phone number: 011 950 9077</li>
            <li>Email address: reservations@mphongolahotel.co.za</li>
            <li>https://mphongolahotel.co.za</li>
            <li>Impala Road, Klipriversburg Nature Reserve</li>
          </ul>
        </div>

        <div className='map'>
            <h3>Address</h3>
            <img src={location} alt='map' />
        </div>
    
      </div>
    </div>
  </footer>

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