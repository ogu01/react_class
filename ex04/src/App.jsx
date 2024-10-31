import { useState } from "react";

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
    </>
  );
}

export default App;
