import "../css/projectDetail.css";

import { FaCalendarDays } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaWaveSquare } from "react-icons/fa6";
import { FaBarsProgress } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import SecondaryHead from "../component/SecondaryHead";
import { useNavigate} from "react-router-dom";

const ProjectDetail = () => {
  const navigate = useNavigate();
  return (<><SecondaryHead imag={'/products/header/steam.jpg'} headTitle="PROJECT"
 />
    <div className="proj-de-container">
      <div className="proj-de-side">
        <div className="item-he-side">
          <div className="icon-he-proj">
            <span>
              <FaScrewdriverWrench />
            </span>
            <h2>Project</h2>
          </div>
          <p>stenter installation</p>
        </div >
        <div className="item-he-side">
          <div className="icon-he-proj">
            <span><FaBarsProgress/></span>
            <h2>Categories</h2>
          </div>
          <p>industrial</p>
        </div>
        <div className="item-he-side">
          <div className="icon-he-proj">
            <span>
              <FaCalendarDays />
            </span>
            <h2>time</h2>
          </div>
          <p>60 day</p>
        </div>
        <div className="item-he-side">
          <div className="icon-he-proj">
            <span><FaWaveSquare/></span>
            <h2>Status</h2>
          </div>
          <p>good</p>
        </div>
        <div className="item-he-side">
          <div className="icon-he-proj">
            <span>
              <FaUser />
            </span>
            <h2>Client</h2>
          </div>
          <p>alfa tex</p>
        </div>
      </div>
      <div className="proj-de-main">
        <div >
          <h1>stenter installation</h1>
          <p>
            All this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth,
            builder of human happiness. Great explorer of the truth, the
            master-builder of human happinessbut because those who do not to
            pursue seds
          </p>
        </div>
        <div>
          <h3>Successful Complete project</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac
            mauris molestie hendrerit.
          </p>
          <ul>
            <li> <FaCaretRight className="ii"/>Words is roughly being maintained.</li>
            <li><FaCaretRight className="ii"/>Previous casing is maintained</li>
            <li><FaCaretRight className="ii"/>Letters or begins with a capital letter.</li>
          </ul>
        </div>
        <div>
          <h3>Problem</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac
            mauris molestie hendrerit.
          </p>
        </div>
        <div>
          <h3>Solution</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac
            mauris molestie hendrerit.
          </p>
        </div>
        <div>
          <h3>Process</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            viverra mauris eget tortor imperdiet vehicula. Proin egestas diam ac
            mauris molestie hendrerit.
          </p>
          <div className="back" onClick={()=>navigate(-1)}><FaAnglesLeft/><FaAnglesLeft/> <button>to all Projects</button></div>
          
        </div>
        
      </div>
    </div>
    </>
  );
};

export default ProjectDetail;
