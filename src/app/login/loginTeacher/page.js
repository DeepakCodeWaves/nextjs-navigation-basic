"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginTeacher = () => {
  const myrouter = useRouter();
  return (
    <div>
      <h1 className="heading">This is LoginTeacher Page</h1>
      <Link href="/">Click Me to go Home Page</Link>
      <button onClick={() => myrouter.push("/login")}>
        Click me to go Login Page
      </button>
    </div>
  );
};

export default LoginTeacher;
