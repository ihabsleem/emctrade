import SecondaryHead from "../component/SecondaryHead";
import "../css/checkout.css";

const CheckOut = () => {
  return ( <>  <SecondaryHead imag={'/products/header/bolts.jpg'} headTitle="Check Out" 
  styleHead={{maxHeight:'30vh'}}/>
    <div className="cont-checkout">
      <div className="order">
        <h1>Your Order</h1>
        <ul>
          <li>
            {"item1"}
            <strong>{"15$"}</strong>
          </li>
          <li>
            {"item2"}
            <strong>{"19$"}</strong>
          </li>
          <li>
            {"total"}
            <strong>{"15$"}</strong>
          </li>
          <li>
            {"item1"}
            <strong>{"29"}</strong>
          </li>
          <li>
            {"shipping"}
            <strong>{"5$"}</strong>
          </li>
          <li>
            {"cart total"}
            <strong>{"34$"}</strong>
          </li>
        </ul>
      </div>
      <div className="billing">
        <h1>Billing Information</h1>
        <form>
          <div className="double-field">
            <div className="field">
              <label>name</label>
              <input placeholder="first name"></input>
            </div>
            <div className="field">
              <label>last name</label>
              <input placeholder="last name"></input>
            </div>
          </div>
          <div className="single-field">
            <div className="field">
              <label>company name</label>
              <input placeholder="company name"></input>
            </div>
          
          </div>
          <div className="double-field">
            <div className="field">
              <label>phone</label>
              <input placeholder="phone"></input>
            </div>
            <div className="field">
              <label>e mail address</label>
              <input placeholder="e mail address"></input>
            </div>
          </div>
          <div className="double-field">
            <div className="field">
              <label>country</label>
              <input placeholder="country"></input>
            </div>
            <div className="field">
              <label>city</label>
              <input placeholder="city name"></input>
            </div>
          </div>
          <div className="double-field">
            <div className="field">
              <label>town</label>
              <input placeholder="town"></input>
            </div>
            <div className="field">
              <label>post code</label>
              <input placeholder="post code"></input>
            </div>
          </div>
          <div className="double-row">
            <div className="field">
              <label>adress</label>
              <input placeholder="adress 1"></input>
               <input placeholder="adress 2"></input>
            </div>
          </div>
          <div className="submit-field">
          <input type="checkbox" />
          <label>Ship to the same address</label>
          
          </div>
          <button>save and deliver here</button>
        </form>
      </div>
    </div>
    </> 
  );
};

export default CheckOut;
