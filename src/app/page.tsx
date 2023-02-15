"use client";
// ohne "u"se client" denkt nextjs das es ein server site ist :D

import React from "react";
import Header from "../components/Header";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Image from "next/image";

function Welcome() {
  const { siteTitle, jobs, skills } = useContext(AppContext);
  return (
    <>
      <div className="text-current">
        This is the welcome page for the site"{siteTitle}".
      </div>
      {jobs.length > 0 ? (
        <>
          <p>
            This site has <span className="text-yellow-400">{jobs.length}</span>{" "}
            jobs and <span className="text-yellow-400">{skills.length}</span>{" "}
            skills.
          </p>
        </>
      ) : (
        <div className="loading flex justify-center items-center">
          <Image
            src="/images/loading-icon.gif"
            alt="me"
            width="64"
            height="64"
          />
        </div>
      )}
    </>
  );
}

export default Welcome;
