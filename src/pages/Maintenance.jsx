import SecondaryHead from "../component/SecondaryHead";
import "../css/servDetails.css";
import Quote from "../ui/Quote";
import { FiChevronRight } from "react-icons/fi";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Maintenance = () => {
  return (
    <>
      <SecondaryHead
        imag={"/products/header/pexels-pixabay-162625.jpg"}
        headTitle={"SERVICES"}
      />
      <div className="serv-d">
        <div className="serv-d-side">
          <ul>
            <li>all services</li>
            <li>planning factory</li>
            <li>installing machine</li>
            <li>energy saving</li>
            <li>chemical saving</li>
            <li>renew machines</li>
            <li>maintenance</li>
            <li>software managment system</li>
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
        <div className="serv-d-main">
          <div className="detail-main">
            <h1>maintanace processes</h1>
            <p>
              Engineering is concerned with the development, improvement, and
              implementation of inte grated systems of people, money, knowledge,
              information, equipment, energy, materials, analysis and synthesis,
              as well as the mathematical, physical and social sciences together
              with the principles and methods of engineering design to specify,
              predict, and evaluate the results to be obtained from such systems
              or processes.
            </p>
            <div className="serv-d-img">
              <img src="/public/products/general/pexels-pavel-chernonogov-2381463.jpg" />
            </div>
            <p>
              Concerned with the development, improvement, and implementation of
              integrated system of people, money, knowledge, information,
              equipment, energy, materials, analysis and syn thesis, as well as
              the mathematical, physical and social sciences together with the
              principle and methods of engineering design to specify, predict,
              and evaluate the results to be obtained from such systems or
              processes.
            </p>
            <Quote />
          </div>

          <div className="detail-benfits">
            <h1>system benfits</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit.
            </p>
            <div className="benfits-main">
              <ul>
                <li>
                  <i>
                    <FiChevronRight />
                  </i>
                  Pitifully thin compared with the size of the rest of him.
                </li>
                <li>
                  <i>
                    <FiChevronRight />
                  </i>
                  Raising a heavy muff that covered the whole. muff that covered
                  the whole of her lower arm consectetur.
                </li>
                <li>
                  <i>
                    <FiChevronRight />
                  </i>
                  Muff that covered the whole of her lower arm consectetur
                  adipisicing elit
                </li>
              </ul>
              <div className="benf-img">
                <img src="/products/general/img6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="detail-research"><Link to='pricing'>
            <button>
              <p>pricing plane</p>
              <FaAnglesRight />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
