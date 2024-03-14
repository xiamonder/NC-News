export const PageNavigator = ({ limit, p, setP, totalResults }) => {
  const totalPages = Math.ceil(Number(totalResults) / Number(limit));
  return totalPages === 0? null: (
    <div>
      <h3>
        {p} of {totalPages}
      </h3>
      <button
        onClick={() => {
          if (p > 1) {
            setP(Number(p) - 1);
          }
        }}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          if (p < totalPages) {
            setP(Number(p) + 1);
          }
        }}
      >
        Next Page
      </button>
    </div>
  );
};
