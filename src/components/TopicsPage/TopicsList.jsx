import { TopicCard } from "./TopicCard";

export const TopicsList = ({topicsList}) => {
  return  (
    <div className="article-list-wrapper">
      <ul className="article-list">
        <h3>Topics</h3>
        {topicsList.map((topic) => {
          return <TopicCard topic={topic} key={topic.slug} />;
        })}
      </ul>
    </div>
  );
};
