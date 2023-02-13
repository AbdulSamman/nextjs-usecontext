"use client";
import React from "react";
import Header from "../../components/Header";
import { useContext } from "react";
import { AppContext } from "../../components/AppContext";

function Info() {
  const { siteTitle } = useContext(AppContext);
  return (
    <>
      <Header />
      <p>This is the info page.</p>
    </>
  );
}

export default Info;
