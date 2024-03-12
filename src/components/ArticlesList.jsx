import { useState } from "react";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = ({ articlesList }) => {
  return (
    <div className="article-list-wrapper">
      <ul className="article-list">
        {articlesList.map((article) => {
          return (
            <ArticleCard
              articleId={article.article_id}
              key={article.article_id}
              result={article.result}
              totalResults={article.total_results}
            />
          );
        })}
      </ul>
    </div>
  );
};
