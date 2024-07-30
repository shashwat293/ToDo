import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return <input type="text" placeholder="Search tasks..." value={searchTerm} onChange={handleSearch} />;
}

export default SearchBar;
