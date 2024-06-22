import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './style.css';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <Header setQuery={setQuery} />
      <HomePage query={query} />
    </div>
  );
};

export default App;
