import { useLocation, useParams } from "react-router-dom";

export const FilterBar = ({
  topics,
  topicsFilter,
  setTopicsFilter,
  sortBy,
  setSort_by,
  order,
  setOrder,
  limit,
  setLimit,
  setP,
  setSearchParams,
}) => {
  const { pathname } = useLocation();
  const { slug, articleId } = useParams();

  const paramsBuilder = (param, e) => {
    setSearchParams((currSearchParams) => {
      const newParams = new URLSearchParams(currSearchParams);
      newParams.set(param, e.target.value);
      newParams.set("p", 1);
      return newParams;
    });
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-around rounded bg-white p-2 sm:flex-row sm:p-2">
      {pathname === "/"? (
        <div className="my-1 w-full sm:mr-4 sm:w-auto">
          <label htmlFor="topic" className="mr-2 ">
            Topic:
          </label>
          <select
            name="topic"
            id="topic"
            required
            value={topicsFilter}
            onChange={(e) => {
              paramsBuilder("topic", e);
              setTopicsFilter(e.target.value);
              setP(1);
            }}
            className="rounded px-2 py-1"
          >
            <option key="all" value="">
              All
            </option>
            {topics.map((topic) => (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            ))}
          </select>
        </div>
      ): null}
      {!articleId? (
        <>
          <div className="my-1 w-full sm:mr-4 sm:w-auto">
            <label htmlFor="sortby" className="mr-2">
              Sort by:
            </label>
            <select
              name="sortby"
              id="sortby"
              required
              value={sortBy}
              onChange={(e) => {
                paramsBuilder("sortby", e);
                setSort_by(e.target.value);
                setP(1);
              }}
              className="rounded px-2 py-1 focus:outline-none"
            >
              <option value="">---</option>
              <option value="votes">votes</option>
              <option value="comment_count">comments</option>
              <option value="created_at">date</option>
              <option value="title">title</option>
              <option value="author">author</option>
            </select>
          </div>
          <div className="my-1 w-full sm:mr-4 sm:w-auto">
            <label htmlFor="order" className="mr-2">
              Order:
            </label>
            <select
              name="order"
              id="order"
              required
              value={order}
              onChange={(e) => {
                paramsBuilder("order", e);
                setOrder(e.target.value);
                setP(1);
              }}
              className="rounded px-2 py-1 focus:outline-none"
            >
              <option value="Desc">Desc</option>
              <option value="Asc">Asc</option>
            </select>
          </div>
        </>
      ):null}
      <div className="my-1 w-full sm:w-auto">
        <label htmlFor="limit" className="mr-2">
          Results per page:
        </label>
        <select
          name="limit"
          id="limit"
          required
          value={limit}
          onChange={(e) => {
            paramsBuilder("limit", e);
            setLimit(e.target.value);
            setP(1);
          }}
          className="rounded px-2 py-1 focus:outline-none"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};
