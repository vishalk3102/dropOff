import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import MyOrders from "./Pages/Orders/MyOrders";
import OrderDetails from "./Pages/Orders/OrderDetails";
import { loadUser } from "./Redux/Actions/userAction";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";
import PaymentSuccess from "./Pages/Ship/PaymentSuccess";

const App = () => {
  const dispatch = useDispatch();

  const { error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Navbar isAuthenticated={isAuthenticated} />
        {/* <Loader /> */}
        {/* <Dashboard /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/calculaterate" element={<Rate />} />
          <Route exact path="/track" element={<Track />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route
            exact
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
                <Login />
              </ProtectedRoute>
            }
          />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route exact path="/me" element={<Profile />} />
            <Route exact path="/ship" element={<Ship />} />
            <Route exact path="/myroders" element={<MyOrders />} />
            <Route exact path="/order/:id" element={<OrderDetails />} />
          </Route>

          {/* ADMIN ROUTES  */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminroute={true}
                isAdmin={user && user.role === "admin"}
                redirectdmin="/me"
              />
            }
          >
            <Route exact path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/admin/users" element={<Users />} />
            <Route exact path="/admin/orders" element={<Orders />} />
          </Route>

          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
