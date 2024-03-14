import { PostTopic } from "./PostTopic";
import { TopicsList } from "./TopicsList";
import { getTopics } from "../../articles_api_utils";
import { useEffect, useState } from "react";
import { Loading } from "../Utils/Loading";

export const TopicsPage = () => {
  const [totalTopics, setTotalTopics] = useState(0);
  const [topicsList, setTopicsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then(({ topics }) => {
      setIsLoading(false);
      setTopicsList(topics);
      setTotalTopics(topics.length);
    });
  }, []);

  useEffect(() => {
    setTotalTopics(topicsList.length);
  }, [topicsList]);

  return (
    <div className="page">
      <h2>Topics</h2>
      <h3>{totalTopics} Results</h3>
      {isLoading ? <Loading /> : <TopicsList topicsList={topicsList} />}
      <PostTopic topicsList={topicsList} setTopicsList={setTopicsList} />
    </div>
  );
};
