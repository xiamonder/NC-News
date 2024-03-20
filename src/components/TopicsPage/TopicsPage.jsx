import { PostTopic } from "./PostTopic";
import { TopicsList } from "./TopicsList";
import { getTopics } from "../../articles_api_utils";
import { useEffect, useState } from "react";
import { Loading } from "../Utils/Loading";


export const TopicsPage = () => {
  const [totalTopics, setTotalTopics] = useState(0);
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getTopics()
      .then(({ topics }) => {
        setIsLoading(false);
        setTopicsList(topics);
        setTotalTopics(topics.length);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  useEffect(() => {
    setTotalTopics(topicsList.length);
  }, [topicsList]);

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <div className="w-full max-w-6xl justify-evenly px-4">
        <h2 className="mb-5 text-center text-2xl font-bold">Topics</h2>
        <h3 className="text-center text-xl font-semibold">
          {totalTopics} Results
        </h3>
        <div className="mt-6">
          {isLoading ? (
            <div className="flex justify-center">
              <Loading />
            </div>
          ) : (
            <div className="mt-4">
              <TopicsList topicsList={topicsList} />
            </div>
          )}
        </div>
        <div className="mt-6">
          <PostTopic topicsList={topicsList} setTopicsList={setTopicsList} />
        </div>
      </div>
    </div>
  );
};
