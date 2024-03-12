import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../articles_api_utils";
import { FullArticleCard } from "./FullArticleCard";
import { RelatedArticles } from "./RelatedArticles";
import { Loading } from "./Loading";

export const ArticlePage = () => {
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
  return (
    <div>
      {isLoading ? <Loading /> : <FullArticleCard article={article} />}
      <RelatedArticles setIsLoading ={setIsLoading} article={article} articleId={articleId} />
    </div>
  );
};
