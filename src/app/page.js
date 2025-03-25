"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const myrouter = useRouter();
  const mynavigationfunction = (item) => {
    myrouter.push(item);
  };
  const myfunction = () => {
    alert("function called on click");
  };
  const itempassedonfunction = (item) => {
    alert(item);
  };
  const [state, setstate] = useState("Delhi");
  const changestatename = () => {
    setstate("Mumbai");
  };
  const InnerComponent = () => {
    return <h1>This is InnerComponent</h1>;
  };

  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p> The name of this city will change from button click - {state} </p>
      <button onClick={() => alert("Alert successfully called ")}>
        Normal Alert
      </button>
      <button onClick={myfunction}>Function calling button</button>
      <button
        onClick={() => itempassedonfunction("this is item passed from button")}
      >
        {" "}
        Item passed from button click{" "}
      </button>
      <button onClick={changestatename}>Click to change the state name</button>
      <SecondComponent data={"astro"} />
      <SecondComponent data={"Vercel"} />
      <InnerComponent />
      <Link href="/login">Click to go Login Page</Link>
      <Link href="/about">Click to go About Page</Link>
      <button onClick={() => myrouter.push("/login")}>
        Go to Login Page with router navigation
      </button>
      <button onClick={() => mynavigationfunction("/about")}>
        Go to About Page with router navigation
      </button>
    </main>
  );
}

const SecondComponent = (props) => {
  return (
    <div>
      <h2>I am SecondComponent and my name is {props.data}</h2>
    </div>
  );
};
