import React from "react";
import Article from "./Article"; // Import the Article component

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
          minutes={article.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
