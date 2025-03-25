"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const AboutCollege = () => {
  const myrouter = useRouter();
  return (
    <div>
      <p>This is AboutCollege page</p>
      <Link href="/">Click on this link to go Home Page</Link>
      <button onClick={() => myrouter.push("/about")}>
        CLICK ME for About Page
      </button>
    </div>
  );
};

export default AboutCollege;
