import SliderProduct from "../ui/SliderProduct";
import "../css/shopDetials.css";
import { FaRegStar } from "react-icons/fa6";
import { useState } from "react";
import SecondaryHead from "../component/SecondaryHead";
import { Link } from "react-router-dom";

function ShopDetails() {
  const [counter , setCounter] = useState(1)
  function inc(e){
     setCounter(counter => counter + 1);
    e.preventDefault();
  }
  function dec(e){
    counter>1 &&  setCounter(counter =>  counter - 1);
    e.preventDefault();
  }

  return (
    <>
    <SecondaryHead imag={'/products/header/bolts.jpg'} headTitle="SpareParts" 
     styleHead={{maxHeight:'30vh'}}/>
      <div className="shop-d-first">
        <div className="s-d-product">
          <SliderProduct />
        </div>
        <div className="s-d-head">
          <h2>mechanical seal</h2>
          <div className="price">99$</div>
          <div className="ratting">
            <span>
              <FaRegStar />
            </span>
            <span>
              <FaRegStar />
            </span>
            <span>
              <FaRegStar />
            </span>
            <span>
              <FaRegStar />
            </span>
            <span>
              <FaRegStar />
            </span>
            (4 customer review)
          </div>
          <p>
            Hundreds of thousands a still more glorious nights around art table
            Nov 28, 2019 Uncategorized Preserve and cherish that pale blue dot
            are creatures of the cosmos light years Nov 27, 2019 Uncategorized
            Great turbulent clouds hearts of the stars stirred by starlight sky
            culture
          </p>
          <form>
            <input  placeholder="1" type="number"
            value={counter} onChange={(e)=> setCounter(e.target.value)}/>
            <div className="in-de">
              <button onClick={inc} className="counter-btn">+</button>
              <button onClick={dec} className="counter-btn">-</button>
            </div>
          </form>
           <Link to='order'> <button className="buy-btn">buy now</button></Link>
        </div>
      </div>
      <div className="shop-d-second">
        <ul>
          <li>Description</li>
          <li>Specification</li>
          <li>Review</li>
        </ul>
        <div className="description-s">
          <p>
            Hundreds of thousands a still more glorious nights around art table
            Nov 28, 2019 Uncategorized Preserve and cherish that pale blue dot
            are creatures of the cosmos light years Nov 27, 2019 Uncategorized
            Great turbulent clouds hearts of the stars stirred by starlight sky
            culture
          </p>
          <ul>
            <li>Quality Control System , 100% Satisfaction Guarantee</li>
            <li>Unrivalled Workmanship, Professional and Qualified</li>
            <li>Environmental Sensitivity, Personalised Solutions</li>
          </ul>
        </div>
        <div className="specification-s">
          <table>
            <tbody>
              <tr>
                <td>size</td>
                <td>25mm</td>
              </tr>
              <tr>
                <td>material</td>
                <td>S S</td>
              </tr>
              <tr>
                <td>material</td>
                <td>S S</td>
              </tr>
              <tr>
                <td>material</td>
                <td>S S</td>
              </tr>
              <tr>
                <td>material</td>
                <td>S S</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="review-s"></div>
      </div>
      <div className="shop-d-third">
        <h2>related products</h2>
        <h1>featured products</h1>
        <div className="related-products"></div>
      </div>
    </>
  );
}

export default ShopDetails;
