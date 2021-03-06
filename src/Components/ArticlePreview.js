import React from 'react';

const ArticlePreview = props => {
  const article = props.article;

// article author icon
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`@${article.author.username}`}>
          <img src={article.author.image} />
        </Link>

// article written by and created at
        <div className="info">
          <Link className="author" to={`@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

// # of times article has been liked
        <div className="pull-xs-right">
          <button
            className="btn btn-sm btn-outline-primary">
            <i className="ion-heart"></i> {article.favoritesCount}
          </button>
        </div>
      </div>

// article preview
      <Link to={`article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
        {
          article.tagList.map(tag => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            )
          })
        }
      </ul>
    </a>
  </div>
  );
}

export default ArticlePreview;
