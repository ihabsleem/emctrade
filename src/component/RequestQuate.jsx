import "../css/requestQuate.css";


const RequestQuate = () => {
  return (
    <div className="main-req-quate">
      <div className="in-main">
        
        <div className="req-quate-img">
          <img src="/public/products/self-pic.de5500d6.png" alt="" />
        </div>
        <div className="quate">
          <h1>Get In Touch</h1>
          <div className="row">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="phone"/>
          </div>
          <div className="row">
            <input type="text"placeholder="email" />
            <input type="text" placeholder="subject"/>
          </div>
          <textarea  placeholder="message"/>
          <button> submit now</button>
          <div className="contact-inf">
            <h1>Contact Info</h1>
            <div className="inf-2">
              <div>
                <h3>Phone number</h3> <p>0100207740 <br/> 01002077040</p>
              </div>
              <div>
                <h3>Email address</h3> <p>ehabsleem@emc-trade.com <br/> headoffice@emc-trade.com</p>
              </div>
              <div>
                <h3>Address info</h3> <p>down twon , 10th of <br/>ramadan cairo Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestQuate;
