export const ArticleFilters = ({
  topics,
  topicsFilter,
  setTopicsFilter,
  sortBy,
  setSort_by,
  order,
  setOrder,
  limit,
  setLimit,
}) => {
  return (
    <div className="filter-bar">
      <label htmlFor="topic">
        Topic:
        <select
          name="topic"
          id="topic"
          required
          value={topicsFilter}
          onChange={(e) => setTopicsFilter(e.target.value)}
        >
          <option key="all" value="">
            All
          </option>
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      </label>

      <label htmlFor="sortby">
        Sort by:
        <select
          name="sortby"
          id="sortby"
          required
          value={sortBy}
          onChange={(e) => setSort_by(e.target.value)}
        >
          <option value="">---</option>
          <option value="votes">votes</option>
          <option value="created_at">date</option>
          <option value="title">title</option>
          <option value="author">author</option>
        </select>
      </label>
      <label htmlFor="order">
        Order:
        <select
          name="order"
          id="order"
          required
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="">---</option>
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
      </label>
      <label htmlFor="limit">
        Results per page:
        <select
          name="limit"
          id="limit"
          required
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        >
          <option value="">---</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </label>
    </div>
  );
};
