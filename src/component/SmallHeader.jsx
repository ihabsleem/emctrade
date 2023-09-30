import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import SearchHead from "./SearchHead";
import { FaGear } from "react-icons/fa6";

const SmallHeader = () => {
  const [show, setShow] = useState(false);
  const [showGear, setShowGear] = useState(false);

  return (
    <>
      {show && <SearchHead />}
      <header className="small-header">
        <div className="gear" onClick={() => setShowGear(!showGear)}>
          <FaGear />
        </div>
       
          <ul className={ showGear ? "gear-menu" : "gear-hide"}>
            <li>steam networks</li> <li>install machines</li>
            <li>energy saving</li>
            <li>renew machines</li>
            <li>planning factory</li>
          </ul>
        
        <div className="child1">
          <div className="working-hours"> sunday - thursday 9AM-7PM</div>
          <div className="telephon">
            <span>
              <BsFillTelephoneFill />
            </span>{" "}
            01002077040
          </div>
          <div className="mail">
            <span>
              <FiMail />
            </span>{" "}
            headoffice@emc-trade.com
          </div>
        </div>
        <div className="search" onClick={() => setShow(!show)}>
          {" "}
          {show ? <FiX /> : <FiSearch />}
        </div>
      </header>
    </>
  );
};

export default SmallHeader;
