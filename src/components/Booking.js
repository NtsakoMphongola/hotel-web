import React from 'react';
import '../components/booking.css';
import pic from '../assets/Deluxe.jpg'

function Booking() {
  return (
    <>
<body className='page3'>
<div className="bg1">
    <div className="main">
      <div className="box">
        <nav>
          <ul id="menu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact us</a>
            <a href="" className="active">Booking</a>
            <a href="#">Login</a> 
            <a href="#">Register</a> 
          </ul>
        </nav>
        {/*  header end >
         content  */}
        <article id="content">
            <div className="box1">
                <div className="wrapper">
                    <form action="#" id="form1">
                        <h2>Book a Room</h2>
                        <fieldset>
                            <div className="row">
                                <input type="Name" className="input" placeholder='Enter Your Name:'/>
                            </div>
                            <div className="row">
                                <input type="text" className="input" placeholder='E-Mail Address:' />
                            </div>
                            <div className="row">
                                <input type="text" className="input"/>
                            </div>
                        
                            <div className="row">
                                <div className="select1">
                                    <select>
                                        <option>&nbsp;</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                Length of Stay: 
                            </div>
                            <div className="row">
                                <div className="select1">
                                    <select>
                                        <option>&nbsp;</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                Number in Party: 
                            </div>
                            <div className="row">
                                <div className="select2">
                                    <select>
                                        <option>&nbsp;</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="select2">
                                    <select>
                                        <option>&nbsp;</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="select2">
                                    <select>
                                        <option>&nbsp;</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                Arrival Date: 
                            </div>
                           
                        </fieldset>
                    </form>
                    <div className="col2 pad">
                        <h2><img src={pic} alt=""/>Best Propositions of This Month</h2>
                        <div className="wrapper line1">
                            <div className="col3">
                                <p className="pad_bot1"><strong className="color3">Lorem ipsum dolor amet consectetur</strong></p>
                                <p>Adipisicing elito eiusmod tempor incididunt ut labore dolore magna.</p>
                                <ul className="list">
                                    <li><span>2</span>Rooms</li>
                                    <li><span>4</span>Beds</li>
                                </ul>
                                <a href="#" className="button1">Book Room</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        {/* content end */}
      </div>
    </div>
  </div>
<div className="main">
  {/* footer  */}
  <footer>
    <p className="col2">
        Copyright &copy; Domain Name All Rights Reserved | Design by TemplateMonster.com
    </p>
   
  </footer>
  {/*  footer end  */}
</div>
<script type="text/javascript">Cufon.now();</script>
</body>
    </>
  )
}

export default Booking