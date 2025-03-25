"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const myrouter = useRouter();
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href="/"> Click to go Home page with Linking</Link>
      <button onClick={() => myrouter.push("/")}>
        Click to go Home page with router navigation
      </button>
    </div>
  );
};

export default LoginPage;
