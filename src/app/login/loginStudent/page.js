"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const LoginStudent = () => {
  const myrouter = useRouter();
  return (
    <div>
      <p>This is LoginStudent Page</p>
      <Link href="/">Click Me to go Home Page</Link>
      <button onClick={() => myrouter.push("/login")}>
        Click me to go Login Page
      </button>
    </div>
  );
};

export default LoginStudent;
