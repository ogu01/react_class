import React, { useState } from "react";

function ConditionalRendering() {
  const condition = true;
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h2>ConditionalRendering.jsx</h2>
      {condition ? <h2>참</h2> : <h2>거짓</h2>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "logout" : "login"}
      </button>
    </>
  );
}
export default ConditionalRendering;
