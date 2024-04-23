import React from "react";

function Article({ title, date, preview }) {
  const minutesToRead = Math.ceil(preview.split(" ").length / 200); // Assuming average reading speed of 200 words per minute

  const renderReadingTime = (minutes) => {
    const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
    const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));
    return minutes < 30 ? `${coffeeCups} ${minutes} min read` : `${bentoBoxes} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <small>{renderReadingTime(minutesToRead)}</small>
    </article>
  );
}

export default Article;
