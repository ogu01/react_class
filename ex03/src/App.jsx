import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import COMP1 from "./COMP1";
import Child from "./Child.jsx";
import Child1 from "./Child1.jsx";
import Child2 from "./Child2.jsx";
import Child3 from "./Child3.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>App.jsx</h2>
      <Child p1="하이요" />
      <Child1 p2="해위" />
      <Child2 p1="hello" p2={100} p3="방가" />
      <Child3
        p1="안녕"
        p2={100}
        p3="hi"
        student={{ name: "정승순", age: 20 }}
      />

      {/*<COMP1  />*/}
    </>
  );
}

export default App;
