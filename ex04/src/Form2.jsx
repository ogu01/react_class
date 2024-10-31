import { useState } from "react";

function Form2() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    email: "",
  });
  const inputUpdate = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
    console.log(profile);
  };
  return (
    <>
      <h2>Form2.jsx</h2>
      이름: <input type="text" name="name" onChange={inputUpdate} />
      <br />
      나이: <input type="text" name="age" onChange={inputUpdate} />
      <br />
      이메일: <input type="text" name="email" onChange={inputUpdate} />
      <br />
    </>
  );
}
export default Form2;
