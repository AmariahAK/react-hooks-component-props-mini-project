import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import blogData from "./data/blog"; // Import blog data

function App() {
  const { name, image, about, posts } = blogData; // Destructure blog data

  return (
    <div>
      <Header name={name} /> {/* Render the Header component with the blog name */}
      <About image={image} about={about} /> {/* Render the About component with blog image and description */}
      <ArticleList articles={posts} /> {/* Render the ArticleList component with blog posts */}
    </div>
  );
}

export default App;
