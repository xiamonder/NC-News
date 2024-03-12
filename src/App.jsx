import { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import { Articles } from "./components/Articles";
import { FullArticleCard } from "./components/FullArticleCard";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
