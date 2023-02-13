"use client";
import React from "react";
import Header from "../../components/Header";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";
function About() {
  const { siteTitle } = useContext(AppContext);
  return (
    <>
      <Header />
      <div>This is the about page for the site "{siteTitle}".</div>
    </>
  );
}

export default About;
