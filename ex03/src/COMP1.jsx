function COMP1() {
  const name = "정승순";
  const student = {
    name: "정승순",
    age: 26,
  };
  return (
    <>
      <h2>test</h2>
      <h2>hello{name}</h2>
      <h2>학생 이름:{student.name}</h2>
      <h2>학생 나이:{student.age}</h2>
    </>
  );
}
export default COMP1;
