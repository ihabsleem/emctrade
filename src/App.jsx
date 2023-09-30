//import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../src/pages/Home";
//import Agencies from "./../src/pages/Agencies";
import Machines from "./../src/pages/Machines";
import Projects from "./../src/pages/Projects";
import Unroll from "./pages/Unroll";
import SparePartStore from "./../src/pages/SparePartStore";
import Shop from "./pages/Shop";
import TechnicalSupport from "./../src/pages/Agencies";
import Services from "./pages/Services";
import Installation from "./pages/Installation";
import Maintenance from "./pages/Maintenance";
import EnergySaving from "./pages/Energy.Saving";
import AppLayout from "./AppLayout";
import ProjectDetail from "./pages/ProjectDetail";
import ShopDetails from "./pages/ShopDetails";
import CheckOut from "./pages/CheckOut";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path="stenterinstal" element={<ProjectDetail />} />
          </Route>
          <Route path="shop">
            <Route index element={<SparePartStore />} />
            <Route path="product">
              <Route index element={<ShopDetails />} />
              <Route path="order" element={<CheckOut />} />
            </Route>
          </Route>
          <Route path="contactus" element={<ContactUs />} />
          <Route path="machines" > 
          <Route index element={<Machines/>}/>
          <Route path="unroll" element={<Unroll/>}/>
          </Route>
          <Route path="services">
            <Route index element={<Services />} />
            <Route path="planningfactory" element={<TechnicalSupport />} />
            <Route path="installation" element={<Installation />} />
            <Route path="energysaving" element={<EnergySaving />} />
            <Route path="chemicalsaving" element={<Maintenance />} />
            <Route path="renewmachines" element={<Maintenance />} />
            <Route path="maintenance">
              <Route index element={<Maintenance />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>
            <Route path="main" element={<Maintenance />} />
          </Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
