export const PageLayout = ({ sidebar, children }) => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row w-full">
      <aside className="z-30 order-last w-full p-4 pt-10 text-center shadow-md shadow-green lg:fixed  lg:left-0 lg:top-16 lg:order-first lg:h-screen lg:w-1/5">
        <div className="h-[80vh] overflow-hidden">

        {sidebar}
        </div>
      </aside>
      <main className="order-first mb-5 flex-1 p-4 lg:order-last lg:pl-[25%]">
        {children}
      </main>
    </div>
  );
};
