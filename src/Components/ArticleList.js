'use strict';

import ArticlePreview from './ArticlePreview';
import React from 'react';

const ArticleList = props => {
// Loading screen
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }
// no articles to display
  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }
// articles
  return (
    <div>
    {
      props.articles.map(article => {
        return (
          <ArticlePreview article={article} key{article.slug} />
        );
      })
    }
    </div>
  );
};

export default ArticleList;
