import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Articles } from "./components/Articles";
import { ArticlePage } from "./components/ArticlePage";

function App() {
  return (
    <>
      <Navbar />
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
