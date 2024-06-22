import React, { useState, useEffect } from 'react';
import NewsItem from '../components/NewsItem';
import { fetchNews } from '../services/NewsService';
import Pagination from '../components/Pagination';
import './HomePage.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(8);
  const [currentCategory, setCurrentCategory] = useState('general'); // Default category

  useEffect(() => {
    const fetchNewsData = async () => {
      const data = await fetchNews(currentCategory); // Pass currentCategory to fetchNews
      setArticles(data.articles);
    };

    fetchNewsData();
  }, [currentCategory]); // Re-fetch news when category changes

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Latest News</h1>
        <div className="filter-buttons">
          <button onClick={() => handleCategoryChange('sports')}>Sports</button>
          <button onClick={() => handleCategoryChange('business')}>Business</button>
          <button onClick={() => handleCategoryChange('entertainment')}>Entertainment</button>
        </div>
      </header>
      <div className="card-container">
        {currentArticles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </div>
      <Pagination
        totalArticles={articles.length}
        articlesPerPage={articlesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
