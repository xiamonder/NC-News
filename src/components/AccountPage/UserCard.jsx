import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export const UserCard = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return !currentUser.username ? (
    <div
      onClick={() => {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      }}
      className="flex cursor-pointer flex-col items-center overflow-hidden rounded-md bg-white shadow-sm shadow-green transition duration-200 ease-in-out hover:shadow-md hover:shadow-green"
    >
      <img
        src={user.avatar_url}
        alt="profile"
        className="mb-4 mt-8 h-24 w-24 rounded-md bg-white"
      />
      <div className="p-4">
        <h3 className="text-center text-xl font-semibold">{user.username}</h3>
        <p className="text-center text-sm font-semibold text-green">
          {user.name}
        </p>
      </div>
    </div>
  ) : (
    <div
      onClick={() => {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      }}
      className="hover:bg-green-light flex cursor-pointer flex-row items-center overflow-hidden rounded-md shadow-sm shadow-green transition duration-200 ease-in-out"
    >
      <img
        src={user.avatar_url}
        alt="profile"
        className="ml-4 mr-2 h-10 w-10 rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-md font-semibold">{user.username}</h3>
      </div>
    </div>
  );
};
