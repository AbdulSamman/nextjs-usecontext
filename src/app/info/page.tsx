"use client";
import React from "react";
import Header from "../../components/Header";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

function Info() {
  const { siteTitle } = useContext(AppContext);
  return (
    <>
      <Header />
      <div>This is the info page for the site "{siteTitle}".</div>
    </>
  );
}

export default Info;
