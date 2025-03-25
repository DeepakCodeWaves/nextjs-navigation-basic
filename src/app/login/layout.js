"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const mypathname = usePathname();
  console.log("my pathname", mypathname);
  return (
    <div>
      {mypathname != "/login/loginStudent" ? (
        <ul className="login-menu">
          <li>
            <Link href="/login">Click to go Login Page</Link>
          </li>
          <li>
            <Link href="/login/loginStudent">Click to go Student Page</Link>
          </li>
          <li>
            <Link href="/login/loginTeacher">CLick to go Teacher Page</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
}

export default Layout;
