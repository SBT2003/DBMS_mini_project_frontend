import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Logout from "./components/logout";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/login" element={<LogIn/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
