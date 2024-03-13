import { ArticleCard } from "./ArticleCard";

export const ArticlesList = ({ articlesList }) => {
  return (
    <div className="article-list-wrapper">
      <ul className="article-list">
        {articlesList.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
};
