import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215"; // Placeholder image URL

  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" /> {/* Render blog image or default placeholder image */}
      <p>{about}</p> {/* Render blog description */}
    </aside>
  );
}

export default About;
