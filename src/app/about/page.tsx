"use client";
import React from "react";
import Header from "../../components/Header";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
function About() {
  const { siteTitle } = useContext(AppContext);
  return (
    <div className="pageAbout ">
      <Header />
      <div>This is the about page for the site "{siteTitle}".</div>
      <div className="imageContainer mt-4">
        <img src="/images/about-page.gif" className="w-2/5" />
      </div>
    </div>
  );
}

export default About;
