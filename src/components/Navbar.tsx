"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function Navbar() {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <nav className="bg-neutral-800 py-1 px-2 mb-4">
      <Link
        href="/"
        className={`mr-3 ${activeSegment === null ? "active" : ""} `}
      >
        Welcome
      </Link>
      <Link
        href="/info"
        className={`mr-3 ${activeSegment === "info" ? "active" : ""} `}
      >
        Info
      </Link>
      <Link
        href="/about"
        className={`mr-3 ${activeSegment === "about" ? "active" : ""}`}
      >
        About
      </Link>
    </nav>
  );
}
export default Navbar;
