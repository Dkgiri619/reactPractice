import { Link } from "react-router-dom";

let Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
