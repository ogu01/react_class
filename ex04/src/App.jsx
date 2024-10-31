import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
function App() {
  const [count, setCount] = useState(0);
  const up = () => {
    //alert("up함수호출");
    setCount(count + 1);
  };
  const down = () => {
    //alert("down");
    setCount(count - 1);
  };
  return (
    <>
      <h2>count값: {count}</h2>
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
      <Form1 />
      <Form2 />
    </>
  );
}

export default App;
