import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

let Home = () => {
  let user = useSelector((state) => state);
  let navigate = useNavigate();
  return (
    <>
      {user ? "Home" : navigate("/signup")}
      <br></br>
      <br></br>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </>
  );
};
export default Home;
