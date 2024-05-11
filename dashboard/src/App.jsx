import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import files
import AppContext from "./Context/Context.jsx";
import { Home, SideNavbar } from "./import-export/ImportExport.js";

function App() {

  return (
    <BrowserRouter>
      <AppContext>
        <SideNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ToastContainer position="top-right" />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
