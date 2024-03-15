import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { UserList } from "./UserList";
import { getArticles, getComments, getUsers } from "../../articles_api_utils";
import { ArticlesList } from "../ArticlesPage/ArticlesList";
import { Loading } from "../Utils/Loading";
import { UserCommentsList } from "./UserCommentsList";
import { PageNavigator } from "../Utils/PageNavigator";
export const AccountPage = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [usersList, setUsersList] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [commentsList, setCommentsList] = useState([]);
  const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsersList(users);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getComments(currentUser.username).then(({ comments }) => {
      const userComments = comments.filter(
        (comment) => comment.author === currentUser.username
      );
      setCommentsList(userComments);
      setTotalComments(userComments.length);
      setIsLoading(false);
    });
  }, [currentUser]);

  useEffect(() => {
    setIsLoading(true);
    getArticles(undefined, undefined, undefined, 100, undefined).then(
      ({ articles }) => {
        setIsLoading(false);
        const userArticles = articles.filter(
          (article) => article.author === currentUser.username
        );
        setArticlesList(userArticles);
        setTotalArticles(userArticles.length);
      }
    );
  }, [currentUser]);

  return currentUser.username === undefined ? (
    <div className="page">
      <h2>Log in</h2>
      <h3>Please choose your account</h3>
      <UserList usersList={usersList} setCurrentUser={setCurrentUser} />
    </div>
  ) : (
    <div className="page">
      <h2>Welcome {currentUser.username}</h2>
      <h3>Your Articles</h3>
      <h4>Total: {totalArticles}</h4>
      {isLoading ? <Loading /> : <ArticlesList articlesList={articlesList} />}

      <h3>Your comments</h3>
      <h4>Total: {totalComments}</h4>
      {isLoading ? (
        <Loading />
      ) : (
        <UserCommentsList commentsList={commentsList} />
      )}
      <button
        onClick={() => {
          setCurrentUser({
            username: undefined,
            name: undefined,
            avatar_url: undefined,
          });
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              username: undefined,
              name: undefined,
              avatar_url: undefined,
            })
          );
        }}
      >
        Log out
      </button>
    </div>
  );
};
