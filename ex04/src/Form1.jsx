import { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const inputName = (e) => {
    console.log("함수호출");
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [age, setAge] = useState(0);
  const inputAge = (a) => {
    setAge(a.target.value);
  };
  return (
    <>
      <h2>Form1.jsx</h2>
      이름: <input type="text" onChange={inputName} />
      입력한 이름 : {name}
      <hr />
      나이 : <input type="text" onChange={inputAge} />
      입력한 나이 : {age}
    </>
  );
}
export default Form1;
