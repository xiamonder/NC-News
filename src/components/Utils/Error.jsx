export const Error = ({ error }) => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-5xl font-bold">{error.status}</h1>
      <h2 className="text-2xl font-semibold">{error.data.msg}</h2>
    </div>
  );
};
