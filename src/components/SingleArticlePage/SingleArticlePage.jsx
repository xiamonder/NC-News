import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../articles_api_utils";
import { FullArticleCard } from "./FullArticleCard";
import { RelatedArticles } from "./RelatedArticles";
import { ArticleCommentsList } from "./ArticleCommentsList";
import { Loading } from "../Utils/Loading";
import { Error } from "../Utils/Error";

export const SingleArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [articleId]);

  if (error) {
    return <Error error={error} />;
  }
  return isLoading ? (
    <Loading />
  ) : (
    <div className="page">
      <FullArticleCard article={article} />
      <RelatedArticles article={article} articleId={articleId} />
      <ArticleCommentsList articleId={articleId} />
    </div>
  );
};
