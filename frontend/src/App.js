import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "./Components/Navbar/TopNavbar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import Rate from "./Pages/Rate/Rate";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
// import Loader from "./Components/Loader";
import Track from "./Pages/Track/Track";
import Ship from "./Pages/Ship/Ship";
import Profile from "./Pages/Profile/Profile";
import Dashboard from "./Pages/Admin/Dashboard";
import Orders from "./Pages/Admin/Orders";
import Users from "./Pages/Admin/Users";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Navbar />
        {/* <Loader /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/calculaterate" element={<Rate />} />
          <Route exact path="/ship" element={<Ship />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/users" element={<Users />} />
          <Route exact path="/admin/orders" element={<Orders />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
