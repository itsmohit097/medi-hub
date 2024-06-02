import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "./Context/Context.jsx";

import {
  Navbar,
  Footer,
  Home,
  Appointment,
  AllDoctors,
  AboutUs,
  Login,
  Signup,
  ErrorPage,
  TermsAndConditions,
  PrivacyPolicy,
  AddtoCart,
  Categoryitems,
  SingleMedicine,
  Medicines,
  GoToTop,
  CartPage,
  Bot,
} from "./import-export/ImportExport.js";
// import TopSpecialitiesCard from "./components/TopSpecialitiesCard.jsx";
import SpecialitiesPage from "./pages/SpecialitiesPage.jsx";

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
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/buy-medicines/:id" element={<SingleMedicine />} />
          <Route path="/shop-by-category/:id" element={<Categoryitems />} />
          <Route path="/medicine-cart" element={<AddtoCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/specialities" element={<SpecialitiesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Bot />
        <GoToTop />
        <Footer />
        <ToastContainer position="top-center" />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
