import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Save = () => {
  const navigate = useNavigate();
  const [member, setMember] = useState({
    memberEmail: "",
    memberPassword: "",
    memberName: "",
    memberMobile: "",
  });

  const inputUpdate = (e) => {
    const { name, value } = e.target;
    setMember({
      ...member,
      [name]: value,
    });
  };

  const memberSave = async (e) => {
    e.preventDefault();
    console.log(member);
    let res = await axios.post("http://localhost:8000/member/save", {
      member: member,
    });
    console.log("res", res);
    navigate("/");
  };

  return (
    <>
      <h2>Save.jsx</h2>
      <form onSubmit={memberSave}>
        이메일:
        <input
          type="text"
          name="memberEmail"
          value={member.memberEmail}
          onChange={inputUpdate}
        />
        <br />
        비밀번호:
        <input
          type="text"
          name="memberPassword"
          value={member.memberPassword}
          onChange={inputUpdate}
        />
        <br />
        이름:
        <input
          type="text"
          name="memberName"
          value={member.memberName}
          onChange={inputUpdate}
        />
        <br />
        전화번호:
        <input
          type="text"
          name="memberMobile"
          value={member.memberMobile}
          onChange={inputUpdate}
        />
        <br />
        <input type="submit" value={"회원가입"} />
      </form>
    </>
  );
};
export default Save;
