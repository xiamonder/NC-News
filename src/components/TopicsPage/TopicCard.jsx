import { Link, useLocation } from "react-router-dom";

export const TopicCard = ({ topic }) => {
  const { pathname } = useLocation();

  return pathname !== "/topics" ? (
    <Link to={`/topics/${topic.slug}`}>
      <div className="hover:bg-green-light flex cursor-pointer flex-col overflow-hidden rounded-md  p-4 shadow-sm shadow-green transition duration-200 ease-in-out">
        <h3 className="text-md font-semibold">{topic.slug}</h3>
      </div>
    </Link>
  ) : (
    <Link
      to={`/topics/${topic.slug}`}
      className="hover:bg-green-light flex cursor-pointer flex-col overflow-hidden rounded-md p-4 text-center shadow-sm shadow-green transition duration-200 ease-in-out"
    >
      <h3 className="text-xl font-semibold">{topic.slug}</h3>
      <p className="text-sm font-semibold text-green">{topic.description}</p>
    </Link>
  );
};
