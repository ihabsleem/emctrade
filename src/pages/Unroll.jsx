import SecondaryHead from "../component/SecondaryHead";
import "../css/unroll.css";

import Quote from "../ui/Quote";

import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MachineSlider from "../ui/MachineSlider";

const Unroll = () => {
  return (
    <>
      <SecondaryHead
        imag={"/products/header/pexels-pixabay-162625.jpg"}
        headTitle={"SERVICES"}
      />
      <div className="serv-d">
        <div className="serv-d-side">
          <ul>
            <li>all machines</li>
            <li>unroll fabric</li>
            <li>inspection</li>
            <li>squeezer</li>
            <li>traph</li>
            <li>vessel</li>
            <li>fabric car</li>
            <li>preparing tank</li>
          </ul>
          <div className="brochures">
            <h1>brochures</h1>
            <p>
              View our 2020 financial prospectus brochure for an easy to read
              guide on all of the services offer.
            </p>
            <button>download.pdf</button>
            <button>download.doc</button>
            <button>download.ppt</button>
          </div>
        </div>
        <div className="machine">
          <div className="machine-h">
            <MachineSlider />
            <h1>
              OPEN WIDTH RAW KNITTED FABRIC <br></br> INSPECTION MACHINE
            </h1>
          </div>

          <div className="machine-main">
            <div className="spec">
              <div className="mach-spec">
                <div>
                  <h6>WORKING WIDTH</h6>
                  <p>Max 2400 mm</p>
                </div>
                <div>
                  <h6>WORKING WIDTH</h6>
                  <p>Max 2400 mm</p>
                </div>
              </div>
              <div className="mach-spec">
                <div>
                  <h6>FABRIC INPUT</h6>
                  <p>Unwrapped fabric, Roll</p>
                </div>
                <div>
                  <h6>FABRIC OUTPUT</h6>
                  <p>Roll</p>
                </div>
              </div>
              <div className="mach-spec">
                <div>
                  <h6>FABRIC TYPE</h6>
                  <p>Raw</p>
                </div>
              </div>
              <div className="mach-btn">
                <Link to="pricing">
                  <button>
                    get qutation
                    <FaAnglesRight />
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  Raw, knitted, finished fabric winding and quality control /
                  inspection
                </li>
                <li>Smooth edge winding with edge photocell</li>
                <li>
                  Stop at the end of the fabric with the end of the fabric
                  photocell
                </li>
                <li>Opening wrinkles with spiral openers</li>
                <li>
                  With the help of air, the edges are wrapped by opening the
                  edges fully
                </li>
                <li>
                  With the help of upper and lower lighting trays, healthy
                  fabric control
                </li>
                <li>Weight and metre information feature</li>
                <li>roll and lozenge fabric input feature</li>
                <li>manual adjustment of roll winding stiffness</li>
                <li>automatic fabric tension control (tension).</li>
              </ul>
            </div>
          </div>
          <Quote />
        </div>
      </div>
    </>
  );
};

export default Unroll;
