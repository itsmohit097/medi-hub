import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "./Context/Context.jsx";


import { Navbar, Footer, Home, Appointment, AllDoctors, AboutUs, Medicines } from "./import-export/ImportExport.js";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import AddtoCart from "./pages/AddtoCart.jsx";
import Categoryitems from "./pages/Categoryitems.jsx";
import SingalMedicine from "./pages/SingalMedicine.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import GoToTop from "./components/GoToTop.jsx";


function App() {



  return (
    <BrowserRouter>
      <AppContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/alldoctors" element={<AllDoctors />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/buy-medicines" element={<Medicines />} />
          <Route path="/buy-medicines/:id" element={<SingalMedicine />} />
          <Route path="/shop-by-category/:id" element={<Categoryitems />} />
          <Route path="/medicine-cart" element={<AddtoCart />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <GoToTop/>
        <Footer />
        <ToastContainer position="top-center" />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
