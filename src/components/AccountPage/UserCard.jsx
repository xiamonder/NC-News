import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export const UserCard = ({ user }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <div
      onClick={() => {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user))
      }}
      className="user-card"
    >
      <h3>{user.username}</h3>
      <p>{user.name}</p>
      <img src={user.avatar_url} alt="profile picture" />
    </div>
  );
};
