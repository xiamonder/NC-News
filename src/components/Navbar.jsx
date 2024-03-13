import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
export const Navbar = () => {
  const {currentUser}= useContext(UserContext)
  
  return (
    <div className="navbar">
      <h2>
        <Link to="/">Home</Link>
      </h2>
      {currentUser?<img id="nav-img" src={currentUser.avatar_url}/>:null}
    </div>
  );
};
