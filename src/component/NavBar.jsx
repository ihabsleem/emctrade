import { useEffect, useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import RequestQuate from "./RequestQuate";
import { FiX } from "react-icons/fi";

const NavBar = () => {
  const[showQuate , setShowQuate] = useState(false);
  // const[showSpan , setShowSpan] = useState(true);
  //  function hover(){
  //   setShowSpan(!showSpan)
  // }
  function quateShow(){
    setShowQuate(!showQuate)
  }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
 

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <nav>{showQuate && <><RequestQuate /> <div className="icon-req" 
    onClick={quateShow}><FiX size={24}/></div></>}
      <button onClick={quateShow} 
      > <p>request a quote</p>{<span><FaAngleRight/></span>}</button>
      <div className="menu">
        <ul className={screenSize.width < 760 ? "drop-menu" : "wide-menu"}>
          <li>home</li>
            <li><Link to="projects">projects</Link></li>
          
          
            <li><Link to="shop">shop</Link></li>
          
          
            

            <li><Link to="machines">machines</Link></li>
          

         
          <li>
           <Link to="services">services</Link> 
            {/* <ul className="nested-ul">
              <li><Link to="services/energysaving">energy saving</Link></li>
              <li><Link to="services/maintenance">maintenance</Link></li>
              <li> <Link to="services/installation">installation</Link></li>
              <li><Link to="services/techsupport">tech.support</Link> </li>
            </ul> */}
          </li>
          <li><Link to="contactus">contact us</Link></li>
        </ul>
        <div className="nav-icon">
          <AiOutlineMenuFold size={34} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
