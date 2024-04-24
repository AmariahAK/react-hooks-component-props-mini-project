import logo from './logo';

const blogData = {
  name: "Underreacted", // Replace with your blog name
  image: logo, // Use the imported logo directly
  about: "A blog about learning React", // Blog description
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2020",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      date: "December 8, 2020",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;
