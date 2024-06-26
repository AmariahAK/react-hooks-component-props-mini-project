// src/components/App.js

import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <ArticleList articles={blog.posts} />
      </main>
    </div>
  );
};

export default App;
