import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../articles_api_utils";
import { FullArticleCard } from "./FullArticleCard";
import { RelatedArticles } from "./RelatedArticles";
import { ArticleCommentsList } from "./ArticleCommentsList";
import { Loading } from "../Utils/Loading";
import { Error } from "../Utils/Error";
import { PageLayout } from "../Styling/PageLayout";

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

  return (
    <PageLayout
      sidebar={
        <div className="p-4">
          <h3 className="text-center text-2xl font-bold">
            Related Articles
          </h3>
          <RelatedArticles article={article} articleId={articleId} />
        </div>
      }
    >
      <div>
        {error ? (
          <Error error={error} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <>
            <FullArticleCard article={article} />
            <ArticleCommentsList articleId={articleId} />
          </>
        )}
      </div>
    </PageLayout>
  );
};
