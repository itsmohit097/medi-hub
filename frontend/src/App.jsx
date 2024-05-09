import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "./Context/Context.jsx";


import { Navbar, Footer, Home, Appointment, AllDoctors, AboutUs } from "./import-export/ImportExport.js";

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
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
