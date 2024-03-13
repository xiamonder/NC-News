import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../articles_api_utils";
import { FullArticleCard } from "./FullArticleCard";
import { RelatedArticles } from "./RelatedArticles";
import { ArticleCommentsList } from "./ArticleCommentsList";
import { Loading } from "../Utils/Loading";

export const SingleArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [articleId]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <FullArticleCard article={article} />
      <RelatedArticles article={article} articleId={articleId} />
      <ArticleCommentsList articleId={articleId} />
    </>
  );
};
