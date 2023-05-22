import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./../Pages/Home";
import Tours from "./../Pages/Tours";
import About from "./../Pages/About";
import TourDetails from "./../Pages/TourDetails";
import Login from "./../Pages/Login";
import Register from "./../Pages/Register";
import SearchResultList from "./../Pages/SearchResultList";
import ThankYou from "../Pages/ThankYou";
import Profile from "../Pages/Profile";
import ProfileBooking from "../Pages/ProfileBooking";
import ProfilePassword from "../Pages/ProfilePassword";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profilebooking" element={<ProfileBooking />} />
      <Route path="/profilepassword" element={<ProfilePassword />} />
    </Routes>
  );
};

export default Routers;
