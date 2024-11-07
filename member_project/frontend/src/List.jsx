const List = () => {
  const [profile, setProfile] = useState({
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
      ...profile,
      [name]: value,
    });
    console.log(profile);
  };
  return (
    <>
      <h2>Form2.jsx</h2>
      아이디: <input type="text" name="name" onChange={inputUpdate} />
      <br />
      이메일: <input type="text" name="name" onChange={inputUpdate} />
      <br />
      비밀번호: <input type="text" name="name" onChange={inputUpdate} />
      <br />
      이름: <input type="text" name="age" onChange={inputUpdate} />
      <br />
      전화번호: <input type="text" name="email" onChange={inputUpdate} />
      <br />
    </>
  );
};
export default List;
