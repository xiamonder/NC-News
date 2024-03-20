import { useLocation } from "react-router-dom";
import { TopicCard } from "./TopicCard";

export const TopicsList = ({ topicsList }) => {
  const { pathname } = useLocation();

  return pathname !== "/topics" ? (
    <div>
      <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-1">
        {topicsList.map((topic) => {
          return <TopicCard topic={topic} key={topic.slug} />;
        })}
      </ul>
    </div>
  ) : (
    <div>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {topicsList.map((topic) => {
          return <TopicCard topic={topic} key={topic.slug} />;
        })}
      </ul>
    </div>
  );
};
