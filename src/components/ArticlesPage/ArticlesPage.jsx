import { useEffect, useState } from "react";
import { ArticlesList } from "./ArticlesList";
import { FilterBar } from "../Utils/FilterBar";
import { getArticles, getTopics } from "../../articles_api_utils";
import { PageNavigator } from "../Utils/PageNavigator";
import { Loading } from "../Utils/Loading";
import { TopicsList } from "../TopicsPage/TopicsList";

export const ArticlesPage = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [topics, setTopics] = useState([]);
  const [topicsFilter, setTopicsFilter] = useState("All");
  const [sort_by, setSort_By] = useState("");
  const [order, setOrder] = useState("");
  const [limit, setLimit] = useState("10");
  const [p, setP] = useState("1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicsFilter, sort_by, order, limit, p).then(({ articles }) => {
      setIsLoading(false);
      setArticlesList(articles);
      setTotalArticles(articles[0].total_results);
    });
  }, [topicsFilter, sort_by, order, limit, p]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <div className="page">
      <h2>Articles: {topicsFilter}</h2>
      <h3>Total: {totalArticles}</h3>
      <FilterBar
        topics={topics}
        topicsFilter={topicsFilter}
        setTopicsFilter={setTopicsFilter}
        sort_By={sort_by}
        setSort_by={setSort_By}
        order={order}
        setOrder={setOrder}
        limit={limit}
        setLimit={setLimit}
        setP={setP}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ArticlesList articlesList={articlesList} setIsLoading={setIsLoading} />
      )}
      <PageNavigator
        limit={limit}
        p={p}
        setP={setP}
        totalResults={totalArticles}
      />
      <TopicsList topicsList ={topics}/>
    </div>
  );
};
