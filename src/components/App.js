import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import { articles } from "./data/blog"; // Assuming you have article data imported

function App() {
  const blogName = "Your Blog Name";
  const blogDescription = "Your Blog Description";

  return (
    <div>
      <Header name={blogName} />
      <About image="url-to-your-image" about={blogDescription} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;
