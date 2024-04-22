import { Button } from "../Styling/Button";

export const PageNavigator = ({
  limit,
  p,
  setP,
  totalResults,
  setSearchParams,
}) => {
  const totalPages = Math.ceil(Number(totalResults) / Number(limit));

  return totalPages === 0 ? null : (
    <div className="flex items-center justify-center gap-4">
      <Button
        label="<<"
        onClick={() => {
          if (p > 1) {
            setSearchParams((currSearchParams) => {
              const newParams = new URLSearchParams(currSearchParams);
              newParams.set("p", Number(p) - 1);
              return newParams;
            });
            setP(Number(p) - 1);
          }
        }}
      />
      <h3 className="mx-10">
        {p} of {totalPages}
      </h3>
      <Button
        label=">>"
        onClick={() => {
          if (p < totalPages) {
          setSearchParams((currSearchParams) => {
            const newParams = new URLSearchParams(currSearchParams);
            newParams.set("p", Number(p) + 1);
            return newParams;
          });
            setP(Number(p) + 1);
          }
        }}
      />
    </div>
  );
};
