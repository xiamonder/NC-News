import { Link, useLocation } from "react-router-dom";

export const TopicCard = ({ topic }) => {
  const { pathname } = useLocation();

  return pathname === "/" ? (
    <Link to={`/topics/${topic.slug}`} className="card-link">
      <div className="sidebar">
        <h4>{topic.slug}</h4>
      </div>
    </Link>
  ) : (
    <Link to={`/topics/${topic.slug}`} className="card-link">
      <div className="topic-card">
        <h3>{topic.slug}</h3>
        <p>{topic.description}</p>
      </div>
    </Link>
  );
};
