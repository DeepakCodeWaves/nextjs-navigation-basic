"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const AboutSchool = () => {
  const myrouter = useRouter();
  return (
    <div>
      <p>This is AboutSchool Page</p>
      <Link href="/">Click Me to go Home Page</Link>
      <button onClick={() => myrouter.push("/about")}>
        Click me to go About Page
      </button>
    </div>
  );
};

export default AboutSchool;
