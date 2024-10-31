import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>Header.jsx</h2>
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
    </>
  );
};
export default Header;
