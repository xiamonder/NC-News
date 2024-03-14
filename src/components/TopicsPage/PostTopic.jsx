import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { postTopic } from "../../articles_api_utils";

export const PostTopic = (props) => {
  const { topicsList, setTopicsList } = props;
  const [topic, setTopic] = useState({
    slug: "",
    description: "",
  });


  const { currentUser } = useContext(UserContext);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (currentUser !== null) {
    } else {
      setUserLoggedIn(false);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTopicsList([topic, ...topicsList]);
    postTopic(topic).catch((err) => {
      setTopicsList(topicsList.slice(1));
      setErr("Something went wrong, please try again.");
    });
  };

  return (
    <>
      <form id="topic-form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            name="slug"
            placeholder="Title"
            value={topic.slug}
            onChange={(e) =>
              setTopic((currTopic) => ({
                ...currTopic,
                slug: e.target.value,
              }))
            }
          />
        </label>
        <label>
          <textarea
            rows="4"
            cols="90"
            maxLength="300"
            required
            name="description"
            placeholder="Description"
            value={topic.description}
            onChange={(e) =>
              setTopic((currTopic) => ({
                ...currTopic,
                description: e.target.value,
              }))
            }
          />
        </label>
        <label>
          {userLoggedIn ? null : <p>Please log in to leave a comment</p>}
        </label>
        <button type="submit">Post Topic</button>
      </form>
      {err ? <p>{err}</p> : null}
    </>
  );
};
