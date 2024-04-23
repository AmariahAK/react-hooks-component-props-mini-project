import React from "react";

function Article({ title, date, preview, minutes }) {
  const renderReadingTime = (minutes) => {
    const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5)); // Calculate coffee cup emojis
    const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10)); // Calculate bento box emojis

    // Display coffee cup emojis for articles taking less than 30 minutes,
    // and bento box emojis for articles taking 30 minutes or more
    return minutes < 30 ? `${coffeeCups} ${minutes} min read` : `${bentoBoxes} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small> {/* Use default date if no date is provided */}
      <p>{preview}</p>
      <small>{renderReadingTime(minutes)}</small> {/* Display estimated reading time */}
    </article>
  );
}

export default Article;
