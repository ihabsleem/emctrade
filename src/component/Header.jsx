import { Link } from "react-router-dom";
import "../index.css";
//import logo from "../img/logo/logo-no-background.png";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TfiBarChart } from "react-icons/tfi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
// import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={'/public/products/logo/19.jpg'} alt="logo" />
      </Link>
      <div className="certfied">
        <div className="certfied cert1">
          <AiOutlineSafetyCertificate size={70}  />
          <div>
            <h2>the best industrial</h2>
            <h4>solution provider</h4>
          </div>
        </div>
        <div className="certfied ">
          <HiOutlineWrenchScrewdriver size={50}  />
          <div>
            <h2>textile industries</h2>
            <h4>services</h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
