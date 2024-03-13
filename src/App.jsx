import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ArticlesPage } from "./components/ArticlesPage/ArticlesPage";
import { SingleArticlePage } from "./components/SingleArticlePage/SingleArticlePage";
import { TopicsPage } from "./components/TopicsPage/TopicsPage";
import { UserProvider } from "./contexts/User";
import { AccountPage } from "./components/AccountPage/AccountPage";
function App() {
  return (
    <UserProvider>
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<ArticlesPage />} />
          <Route path="/articles/:articleId" element={<SingleArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/account" element = {<AccountPage/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
