"use client";
import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="headerArea">
        <img src="images/info-icon.png" />
        <h1 className="text-orange-400 text-3xl font-bold mb-4">Info Site</h1>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
