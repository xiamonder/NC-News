import { Link } from "react-router-dom";

export const Navbar = () => {
  console.log("test");
  return (
    <div id="nav-div">
      <h2>
        <Link to="/">Home</Link>
      </h2>
    </div>
  );
};
