import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

export const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <nav className="flex max-h-16 w-full items-center justify-between bg-green p-5 text-white shadow-md">
      <div className="flex gap-4">
        <h2>
          <Link
            to="/"
            className="hover:bg-green-light rounded-md p-2 text-2xl text-white"
          >
            Home
          </Link>
        </h2>
        <h2>
          <Link
            to="/topics"
            className="hover:bg-green-light rounded-md p-2 text-2xl"
          >
            Topics
          </Link>
        </h2>
      </div>
      <div className="flex flex-1 justify-end">
        <Link
          to="/account"
          className="hover:bg-green-light flex items-center gap-2 rounded-md p-1"
        >
          {currentUser.username !== undefined ? (
            <div>
              <img
                className="h-12 w-12 rounded-md bg-white p-1 transition duration-300"
                src={currentUser.avatar_url}
                alt={`${currentUser.username}'s profile`}
              />
            </div>
          ) : (
            <h2 className="hover:bg-green-light text-2xl text-white">Log in</h2>
          )}
        </Link>
      </div>
    </nav>
  );
};
