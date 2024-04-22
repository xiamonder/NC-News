import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { UserList } from "./UserList";
import { getArticles, getComments, getUsers } from "../../articles_api_utils";
import { ArticlesList } from "../ArticlesPage/ArticlesList";
import { Loading } from "../Utils/Loading";
import { UserCommentsList } from "./UserCommentsList";
import { PageLayout } from "../Styling/PageLayout";
import { TopBar } from "../Styling/TopBar";
import { Button } from "../Styling/Button";
import { Error } from "../Utils/Error";

export const AccountPage = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [usersList, setUsersList] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [commentsList, setCommentsList] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [activeTab, setActiveTab] = useState("articles");
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsersList(users);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getComments(currentUser.username)
      .then(({ comments }) => {
        const userComments = comments.filter(
          (comment) => comment.author === currentUser.username,
        );
        setCommentsList(userComments);
        setTotalComments(userComments.length);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [currentUser]);

  useEffect(() => {
    setIsLoading(true);
    getArticles(undefined, undefined, undefined, 100, undefined)
      .then(({ articles }) => {
        setIsLoading(false);
        const userArticles = articles.filter(
          (article) => article.author === currentUser.username,
        );
        setArticlesList(userArticles);
        setTotalArticles(userArticles.length);
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [currentUser]);

  return currentUser.username === undefined ? (
    <div className="flex min-h-[90vh] items-center justify-center">
      <div className="w-full max-w-6xl justify-evenly px-4">
        <h2 className="text-center text-2xl font-bold">Log in</h2>
        <h3 className="text-center text-xl font-semibold">
          Please choose your account
        </h3>
        <UserList usersList={usersList} currentUser={currentUser} />
      </div>
    </div>
  ) : (
    <PageLayout
      sidebar={
        <div>
          <h3 className="text-center text-2xl font-bold">
            Quick Swap User
          </h3>
          <UserList usersList={usersList} currentUser={currentUser} />
        </div>
      }
    >
      <div>
        {error ? (
          <Error error={error} />
        ) : (
          <>
            <TopBar>
                <>
                  <h2 className="text-center text-2xl font-bold">
                    Welcome {currentUser.username}
                  </h2>
                  <div className="flex justify-center gap-4 p-4">
                    <Button
                      label="Articles"
                      onClick={() => setActiveTab("articles")}
                      />
                    <Button
                      label="Comments"
                      onClick={() => setActiveTab("comments")}
                      />
                    <Button
                      label="Log Out"
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
                          }),
                        );
                        setActiveTab("articles");
                      }}
                      />
                  </div>
                </>
              </TopBar>
            <div className="overflow-y-auto pt-16">
              {activeTab === "articles" ? (
                <>
                  <h2 className="text-center text-2xl font-bold ">
                    Your Articles
                  </h2>
                  <h3 className="text-center text-xl font-semibold">
                    Total: {totalArticles}
                  </h3>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <ArticlesList articlesList={articlesList} />
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-center text-2xl font-bold">
                    Your comments
                  </h2>
                  <h3 className="text-center text-xl font-semibold">
                    Total: {totalComments}
                  </h3>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <UserCommentsList commentsList={commentsList} />
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
};
