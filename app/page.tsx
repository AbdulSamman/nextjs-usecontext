"use client";
// ohne "u"se client" denkt nextjs das es ein server site ist :D

import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { AppContext } from "../components/AppContext";

function Welcome() {
  const { siteTitle } = useContext(AppContext);
  return (
    <>
      <Header />
      <div>This is the welcome page for the site"{siteTitle}".</div>;
    </>
  );
}

export default Welcome;
