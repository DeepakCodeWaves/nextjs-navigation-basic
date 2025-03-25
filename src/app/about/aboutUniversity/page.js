"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const AboutUniversity = () => {
  const myrouter = useRouter();
  return (
    <div>
      <p>This is AboutUniversity Page</p>
      <Link href="/"> Click me to go Home page</Link>
      <button onClick={() => myrouter.push("/about")}>
        {" "}
        Click me to go About page
      </button>
    </div>
  );
};

export default AboutUniversity;
