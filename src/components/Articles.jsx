import { useEffect, useState } from "react";
import { ArticlesList } from "./ArticlesList";
import { TopicsSidebar } from "./TopicsSidebar";
import { ArticleFilters } from "./ArticleFilters";
import { getArticles, getTopics } from "../articles_api_utils";
import { PageNavigator } from "./PageNavigator";

export const Articles = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(articlesList.length);
  const [topics, setTopics] = useState([]);
  const [topicsFilter, setTopicsFilter] = useState("All");
  const [sort_by, setSort_By] = useState("");
  const [order, setOrder] = useState("");
  const [limit, setLimit] = useState("10");
  const [p, setP] = useState("1");

  useEffect(() => {
    getArticles(topicsFilter, sort_by, order, limit, p).then(({ articles }) => {
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
    <div className="articles">
      <h2>Articles: {topicsFilter}</h2>
      <h3>Total: {totalArticles}</h3>
      <ArticleFilters
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
      <ArticlesList articlesList={articlesList} />
      <PageNavigator
        limit={limit}
        p={p}
        setP={setP}
        totalResults={totalArticles}
      />
      <TopicsSidebar />
    </div>
  );
};
