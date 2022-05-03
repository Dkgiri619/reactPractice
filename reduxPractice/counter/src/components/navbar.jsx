import {Link } from "react-router-dom"
let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
