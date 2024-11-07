import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>멤버.jsx</h2>
      <Link to="/Save">회원가입</Link>
      <Link to="/List">회원리스트</Link>
    </>
  );
};
export default Header;
