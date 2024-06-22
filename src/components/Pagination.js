import React from 'react';
import './styles/Pagination.css';

const Pagination = ({ totalArticles, articlesPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button 
        onClick={handlePreviousClick} 
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Previous
      </button>
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      <button 
        onClick={handleNextClick} 
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
