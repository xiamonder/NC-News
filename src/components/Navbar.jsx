import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
export const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="navbar">
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/topics">Topics</Link>
      </h2>
      <Link to="/account">
      {currentUser ? (
          <h2>Account
            <img id="nav-img" src={currentUser.avatar_url} alt ='profile picture'/>
          </h2>
      ) : <h2>Log in</h2>}
        </Link>
    </div>
  );
};
