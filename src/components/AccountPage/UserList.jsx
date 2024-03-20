import { UserCard } from "./UserCard";

export const UserList = ({ usersList, currentUser }) => {
  return currentUser.username !== undefined ? (
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-1">
      {usersList
        .filter((user) => user.username !== currentUser.username)
        .map((user) => (
          <UserCard user={user} key={user.username} />
        ))}
    </div>
  ) : (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
      {usersList.map((user) => (
        <UserCard user={user} key={user.username} />
      ))}
    </div>
  );
};
