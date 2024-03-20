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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (currentUser.username !== undefined) {
      setUserLoggedIn(true);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.username === undefined) {
      setUserLoggedIn(false);
    } else {
      setIsSubmitting(true);
      setTopicsList([topic, ...topicsList]);
      postTopic(topic)
        .then(() => {
          setIsSubmitting(false);
          setTopic({ slug: "", description: "" });
        })
        .catch((err) => {
          setTopicsList(topicsList.slice(1));
          setErr("Something went wrong, please try again.");
          setIsSubmitting(false);
        });
    }
  };

  return (
    <>
      <form id="topic-form" onSubmit={handleSubmit} className="space-y-4 mb-5">
        <label className="block">
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
            className="mt-1 block w-full rounded-md pl-2  shadow-sm focus:outline-green-light"
          />
        </label>
        <label className="block">
          <textarea
            rows="4"
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
            className="mt-1 block w-full rounded-md border-gray pl-2 shadow-sm focus:outline-green-light"
          />
        </label>

        {userLoggedIn ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className={
              "rounded bg-green px-4 py-2 font-bold text-white shadow-md transition-shadow duration-200 ease-in-out hover:bg-green-light hover:shadow-lg"
            }
          >
            {isSubmitting ? "Posting..." : "Post Topic"}
          </button>
        ) : (
          <p className="text-red">Please log in to post a topic</p>
        )}
      </form>
      {err ? <p className="text-red">{err}</p> : null}
    </>
  );
};
