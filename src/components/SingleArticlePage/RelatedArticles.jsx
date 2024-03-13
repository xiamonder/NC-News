import { useEffect, useState } from "react";
import { ArticlesList } from "../ArticlesPage/ArticlesList";
import { getArticles } from "../../articles_api_utils";

export const RelatedArticles = ({ article, articleId }) => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticles(article.topic, "votes", "desc", "4", "1").then(
      ({ articles }) => {
        const relatedArticles = articles
          .map((currArticle) => {
            if (currArticle.article_id !== article.article_id) {
              return currArticle;
            }
          })
          .filter((currArticle) => currArticle !== undefined)
          .slice(0, 3);
        setArticlesList(relatedArticles);
      }
    );
  }, [articleId]);

  return <ArticlesList articlesList={articlesList} />;
};
