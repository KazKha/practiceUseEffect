import React from "react";
import "./App.css";
import Headers from "./Components/Headers";
import UserListing from "./Components/UserListing";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import MainPage from "./Components/MainPage";
import ContactUs from "./Components/ContactUs";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <>
      <Headers />

      <Routes>
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/user-listing" element={<UserListing />} />
        
        <Route exact path="/user-detail/:id" element={<UserDetails />} />
        <Route exact path="/Contact-us" element={<ContactUs />} />
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
