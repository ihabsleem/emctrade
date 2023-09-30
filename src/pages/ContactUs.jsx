import SecondaryHead from '../component/SecondaryHead';
import '../css/contactus.css'


const ContactUs = () => {
  return (<> 
  <SecondaryHead
    imag={"/products/header/pexels-pixabay-162625.jpg"}
    headTitle={"Contact us"}
  />
  <div className='cont-img'>
    <img src='/public/products/general/factory 1.jpg'/>
    
    <div className="contact-cont">
      <div className="contact-form">
        <h2>Contact Form</h2>
        <h1>Get In Touch</h1>
        
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Phone"/>
        <input type="text" placeholder="Subject"/>
        <textarea type="text" placeholder="Message" rows={4}/>
        <button>submit</button>
      </div>
      <div className="contact-contact">
      <h2>Contact Form</h2>
        <h1 className='formh1'>Get In Touch</h1>
        <div className='card-contact'>
        <h1>Phone number</h1>
        <p>01002077040</p>
        <h1>Email address</h1>
        <p>ehabsleem@emc-trade.com</p>
        <h1>Address info</h1>
        <p> downtowm ,10-th of ramadan city , Egypt</p>
        <h1>Opening Hours</h1>
        <p>Mon-Fri: 9 am – 6 pm<br/>Saturday: 9 am – 4 pm <br/>Sunday: Closed</p>
      
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactUs;
