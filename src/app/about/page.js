"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const myrouter = useRouter();
  const routerfunction = (route) => {
    myrouter.push("/about" + route);
  };

  return (
    <div>
      <p>About Page</p>
      <Link href="/"> Click to go Home Page with Linking</Link>
      <button onClick={() => myrouter.push("/")}>
        CLick to go Home Page with router navigation
      </button>
      <button onClick={() => routerfunction("/aboutCollege")}>
        Click to go About College Page
      </button>
      <button onClick={() => routerfunction("/aboutSchool")}>
        Click to go About School Page
      </button>
      <button onClick={() => routerfunction("/aboutUniversity")}>
        Click to go About University Page
      </button>
    </div>
  );
};

export default AboutPage;
