import React, { useState } from "react";

const Save = () => {
  const [member, setProfile] = useState({
    id: "",
    email: "",
    password: "",
    name: "",
    mobile: "",
  });
  const inputUpdate = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setProfile({
      ...member,
      [name]: value,
    });
    console.log(member);
  };
  return (
    <>
      <h2>Form2.jsx</h2>
      아이디:{" "}
      <input type="text" name="id" onChange={inputUpdate} value={member.id} />
      <br />
      이메일:{" "}
      <input
        type="text"
        name="email"
        onChange={inputUpdate}
        value={member.email}
      />
      <br />
      비밀번호:{" "}
      <input
        type="text"
        name="password"
        onChange={inputUpdate}
        value={member.password}
      />
      <br />
      이름:{" "}
      <input
        type="text"
        name="name"
        onChange={inputUpdate}
        value={member.name}
      />
      <br />
      전화번호:{" "}
      <input
        type="text"
        name="mobile"
        onChange={inputUpdate}
        value={member.mobile}
      />
      <br />
    </>
  );
};
export default Save;
