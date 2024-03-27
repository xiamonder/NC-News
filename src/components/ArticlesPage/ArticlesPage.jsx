import { useEffect, useState } from "react";
import { ArticlesList } from "./ArticlesList";
import { FilterBar } from "../Utils/FilterBar";
import { getArticles, getTopics } from "../../articles_api_utils";
import { PageNavigator } from "../Utils/PageNavigator";
import { Loading } from "../Utils/Loading";
import { TopicsList } from "../TopicsPage/TopicsList";
import { useSearchParams } from "react-router-dom";
import { PageLayout } from "../Styling/PageLayout";
import { TopBar } from "../Styling/TopBar";
import { Error } from "../Utils/Error";

export const ArticlesPage = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [topics, setTopics] = useState([]);
  const [topicsFilter, setTopicsFilter] = useState("All");
  const [sort_by, setSort_By] = useState(undefined);
  const [order, setOrder] = useState(undefined);
  const [limit, setLimit] = useState("10");
  const [p, setP] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topicsFilter, sort_by, order, limit, p)
      .then(({ articles }) => {
        setIsLoading(false);
        setArticlesList(articles);
        if (articles.length === 0) {
          setTotalArticles(0);
        } else {
          setTotalArticles(articles[0].total_results);
        }
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [topicsFilter, sort_by, order, limit, p]);

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);

  return (
    <PageLayout
      sidebar={
        <div>
          <h3 className="text-center text-2xl font-bold">Topics</h3>
          <TopicsList topicsList={topics} />
        </div>
      }
    >
      <div>
        {error ? (
          <Error error={error} />
        ) : (
          <>
            <TopBar>
              <>
                <h2 className="text-center text-2xl font-bold">
                  Articles: {topicsFilter}
                </h2>
                <h3 className="text-center text-xl font-semibold">
                  Total: {totalArticles}
                </h3>
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
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                />
              </>
            </TopBar>

            <div className="overflow-y-auto pt-20">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <h2 className="text-center text-2xl font-bold">
                    Articles: {topicsFilter}
                  </h2>
                  <h3 className="text-center text-xl font-semibold">
                    Total: {totalArticles}
                  </h3>

                  <ArticlesList
                    articlesList={articlesList}
                    setIsLoading={setIsLoading}
                  />
                </>
              )}
            </div>
            <PageNavigator
              limit={limit}
              p={p}
              setP={setP}
              totalResults={totalArticles}
              setSearchParams={setSearchParams}
            />
          </>
        )}
      </div>
    </PageLayout>
  );
};
