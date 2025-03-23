import React, { useState } from 'react';
import './CategorySearch.css';

const CategorySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  // Sample data - replace with your API data
  const sampleData = [
    { id: 1, title: 'Educational Donations', category: 'Educational', description: 'Empower young minds with the gift of knowledge!' },
    { id: 2, title: 'Homeless Donations', category: 'Homeless', description: 'Offer hope and shelter to those who is in need!' },
    { id: 3, title: 'Farming Development Donations', category: 'Farming', description: 'Invest in sustainable agriculture for thriving communities!' },
    { id: 4, title: 'Water Cleaning Donations', category: 'Watering', description: 'Help purify our water sources for healthier lives!' },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Educational', label: 'Education providing' },
    { value: 'Homeless', label: 'Homeless Helping' },
    { value: 'Farming', label: 'Farming Development' },
    { value: 'Watering', label: 'Water Cleaning' },
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
  ];

  const filteredResults = sampleData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="category-search">
      <div className="search-header">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        
        <div className="filters">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-filter"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-grid">
        {filteredResults.map(item => (
          <div key={item.id} className="result-card">
            <div className="category-tag">{item.category}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="view-button">View Details</button>
          </div>
        ))}
      </div>

      {filteredResults.length === 0 && (
        <div className="no-results">
          No results found for "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default CategorySearch;