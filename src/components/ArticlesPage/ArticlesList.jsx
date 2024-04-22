import { useParams } from "react-router-dom";
import { NoResults } from "../Utils/NoResults";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = ({ articlesList }) => {
  const { articleId } = useParams();
  return articlesList.length === 0 ? (
    <NoResults />
  ) : articleId !== undefined ? (
    <div>
      <ul className="mt-8 grid max-h-fit grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
        {articlesList.map((article) => (
          <li key={article.article_id} className=" list-none ">
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <ul className="mt-8 grid grid-cols-1 gap-4 pb-10 lg:grid-cols-2">
        {articlesList.map((article) => (
          <li key={article.article_id} className=" list-none ">
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
};
