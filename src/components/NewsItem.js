import React from 'react';
import './styles/NewsItem.css';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  const truncateText = (text, limit) => {
    if (!text) {
      return 'No description available'; // Fallback for null or undefined descriptions
    }
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  };

  return (
    <div className="card">
      <img src={urlToImage} alt={title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{truncateText(description, 100)}</p>
        <a href={url} className="card-link" target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default NewsItem;
