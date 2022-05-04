import { Link } from "react-router-dom";
let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/cart">
          Cart
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
