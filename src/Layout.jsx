import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Home/Navbar.jsx";
import Footer from "./Components/Home/Footer.jsx";

const Layout = () => {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    const fetchStripePromise = async () => {
      const stripePromise = await loadStripe(import.meta.env.VITE_S_PK);
      setStripePromise(stripePromise);
    };
    fetchStripePromise();
  }, []);

  const options = {
    mode: "setup",
    appearance: {
      theme: "flat",
    },
    currency: "gbp",
  };

  return (
    <>
      <Elements options={options} stripe={stripePromise}>
        <Navbar />
        <Outlet />
        <Footer />
      </Elements>
    </>
  );
};

export default Layout;