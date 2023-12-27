import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import Quote from "./Components/Quote/Quote.jsx";
import Layout from "./Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { loadStripe } from "@stripe/stripe-js";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfW2Ww_hfUGgKeJPgoeyNmmbnQq9Y5ns0",
  authDomain: "ccwlogistics-de10d.firebaseapp.com",
  projectId: "ccwlogistics-de10d",
  storageBucket: "ccwlogistics-de10d.appspot.com",
  messagingSenderId: "139564020026",
  appId: "1:139564020026:web:ddae4a41cd2d0e0c44a003",
  measurementId: "G-PZ7XJZHCZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  const [stripePromise, setStripePromise] = useState(null);
  useEffect(() => {
    setStripePromise(loadStripe(import.meta.env.VITE_S_PK));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Quote" element={<Quote stripePromise={stripePromise} />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
