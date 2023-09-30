import "../css/projects.css";
import SecondaryHead from "../component/SecondaryHead";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "2",
    url: "stenterinstal",
    name: "stenter installation",
    img: "/products/projects/14047261_170381926701009_961536205919412892_o.jpg",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "10",
  },
  {
    id: "5",
    url:"dryerinstall",
    name: "stenter installation",
    img: "/products/projects/14047261_170381926701009_961536205919412892_o.jpg",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "1",
  },
  {
    id: "3",
    url:"steamnetwork",
    name: "dryer install",
    img: "/products/projects/14086368_170381836701018_6079071093936947200_o.jpg",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "10",
  },
  {
    id: "4",
    url: "stenterinstal",
    name: "steam network",
    img: "/products/projects/251084902_1127180051021187_5408303234711684782_n.jpg",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "20",
  },
  {
    id: "2",
    url: "stenterinstal",
    name: "stenter installation",
    img: "/products/projects/14047261_170381926701009_961536205919412892_o.jpg",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "40",
  },
  {
    id: "4",
    url:"stenterinstal",
    name: "steam network",
    img: "/products/projects/251084902_1127180051021187_5408303234711684782_n.jpg",
    discreption:
      "High Performance Services For Multiple Insdustries And Technologies",
    duration: "60 ",
  },
];
const Projects = () => {
  return (
    <main>
     <SecondaryHead imag={'/products/header/steam.jpg'} headTitle="PROJECT"/>
      <div className="container-pro">
        {projects.map((pro) => (<Link key={pro.id} to={pro.url}
        style={{textDecoration: 'none',color:"inherit"}}>
          <div className="project" >
            
            <div className="project-img">
            <div className="lay"> </div>
              <img src={pro.img} />
            </div>
            <h3>{pro.name}</h3>
            <p>{pro.discreption}</p>
             <p className="pro-p">read more</p>
           
            <div className="pro-read"> </div>
          
  
          </div>
          </Link>
        ))}
        
       
      </div>
    </main>
  );
};

export default Projects;
