import { Link } from "react-router-dom";
import logo from "../img/logo/logo-no-background.png";
import { FiMail } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="agent">
        <h2>agent one</h2>
        <h2>agent two</h2>
        <h2>agent three</h2>
        <h2>agent four</h2>
      </div>
      <div className="main-footer">
        <div className="right">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <p>
            Over 20 year experience and knowledge international standards
            technologicaly changes our industrial systems, we are dedicated to
            provides the best solutions to our valued customers there are many
            variation solution we makes long-term investments goal in global
            companies in TEXTILE Industries sectors, mainly in EGYPT and other
            countries
          </p>
          <div className="adress">
           
            <FaLocationDot />
            down town 10th of ramadan city Egypt
          </div>
          <div className="footer-mail">
            <FiMail /> headoffice@emc-trade.com
          </div>
          <div className="footer-telephon">
            <BsFillTelephoneFill /> +2 01002077040{" "}
          </div>
          <div className="contacts">
           <div><a href="https://www.facebook.com/textilesparepart"><FaFacebookF size={24} /></a></div> 
           <div><FaLinkedinIn size={24} /></div> 
           <div><FaTwitter size={24} /></div>
           <div><FaWhatsapp size={24} /></div>
           <div><a href="http://m.me/textilesparepart"><FaFacebookMessenger size={24} /></a></div>
          </div>
        </div>
        <div className="left">
          <div className="links">
            <div className="useful-links">
              <h3>useful links</h3>
              <ul>
                <li>contact us</li>
                <li>maintenance<br></br> pricing</li>
                <li>sale machine</li>
                <li>hot project</li>
              </ul>
            </div>
            <div className="our-services">
              <h3>our services</h3><div className="services-list">
                   <ul>
                <li>energy saving</li>
                <li>install machines</li>
                <li>planning factory</li>
                <li>renew machines</li>
              </ul>
              <ul>  <li>saving chemical</li>
                <li>maintenance contract</li>
                <li>spareparts shop</li>
                <li>chemical shop</li></ul>
              </div>
           
            </div>
          </div>
          <div className="subscribe">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter to receive latest news on our
              services.
            </p>
            <form>
              <input placeholder="enter your mail"></input>
              <button>subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="end-footer">
        <p>copy right &copy; 2023 E M C Trade</p>
      </div>
    </div>
  );
};

export default Footer;
