import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles, getTopics } from "../../articles_api_utils";
import { Loading } from "../Utils/Loading";
import { FilterBar } from "../Utils/FilterBar";
import { PageNavigator } from "../Utils/PageNavigator";
import { TopicsList } from "./TopicsList";
import { ArticlesList } from "../ArticlesPage/ArticlesList";
import { useSearchParams } from "react-router-dom";

export const SingleTopicPage = () => {
  const { slug } = useParams();
  const [articlesList, setArticlesList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [sort_by, setSort_By] = useState(undefined);
  const [order, setOrder] = useState(undefined);
  const [limit, setLimit] = useState("10");
  const [p, setP] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [topicsList, setTopicsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setIsLoading(true);
    getArticles(slug, sort_by, order, limit, p).then(({ articles }) => {
      setIsLoading(false);
      setArticlesList(articles);
      articles[0] === undefined
        ? setTotalArticles(0)
        : setTotalArticles(articles[0].total_results);
    });
  }, [slug, sort_by, order, limit, p]);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then(({ topics }) => {
      setIsLoading(false);
      setTopicsList(topics);
    });
  }, []);

  useEffect(() => {
    setP(1);
  }, [slug, sort_by, order]);

  return (
    <div className="page">
      <h2>{slug}</h2>
      <h3>Total: {totalArticles}</h3>
      <FilterBar
        sort_By={sort_by}
        setSort_by={setSort_By}
        order={order}
        setOrder={setOrder}
        limit={limit}
        setLimit={setLimit}
        setP={setP}
        setSearchParams={setSearchParams}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ArticlesList
            articlesList={articlesList}
            setIsLoading={setIsLoading}
          />
          <PageNavigator
            limit={limit}
            p={p}
            setP={setP}
            totalResults={totalArticles}
            setSearchParams={setSearchParams}
          />
        </>
      )}
      <TopicsList topicsList={topicsList} />
    </div>
  );
};
