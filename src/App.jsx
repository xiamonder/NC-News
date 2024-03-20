import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ArticlesPage } from "./components/ArticlesPage/ArticlesPage";
import { SingleArticlePage } from "./components/SingleArticlePage/SingleArticlePage";
import { TopicsPage } from "./components/TopicsPage/TopicsPage";
import { UserProvider } from "./contexts/User";
import { AccountPage } from "./components/AccountPage/AccountPage";
import { SingleTopicPage } from "./components/TopicsPage/SingleTopicsPage";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col">
        <div className={`fixed left-0 top-0 z-40 w-full`}>
          <Navbar />
        </div>
      </div>
      <div className="flex-1 bg-white pt-20">
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles/:articleId" element={<SingleArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:slug" element={<SingleTopicPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
