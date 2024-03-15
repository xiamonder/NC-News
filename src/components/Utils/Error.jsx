export const Error = ({error}) => {
  return (
    <>
      <h1>{error.status}</h1>
      <h2>{error.data.msg}</h2>
    </>
  );
};
