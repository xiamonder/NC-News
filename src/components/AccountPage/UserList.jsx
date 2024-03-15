import { UserCard } from "./UserCard";

export const UserList = ({usersList})=>{

    return(
        <div className="article-list-wrapper">
      <ul className="article-list">
        {usersList.map((user) => {
          return <UserCard user={user} key={user.username} />;
        })}
      </ul>
    </div>
  );
};
    

