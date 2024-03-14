import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
export const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="navbar">
      <h2>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </h2>
      <h2>
        <Link to="/topics" className="nav-link">
          Topics
        </Link>
      </h2>
      <h2>
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </h2>
      <Link to="/account" className="profile-button">
        {currentUser ? (
          <>
            <h2>Account</h2>
            <img
              id="nav-img"
              src={currentUser.avatar_url}
              alt="profile picture"
            />
          </>
        ) : (
          <h2>Log in</h2>
        )}
      </Link>
    </div>
  );
};
