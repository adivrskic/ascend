import React, { useState } from 'react';
import { icons } from '../../icons';
import './search.scss';

const Search = () => {
  const [listActive, setListActive] = useState(false);
  const [searchEngine, setSearchEngine] = useState('google');
  const searchEngines = [
    { engine: 'google', link: 'https://google.com/' },
    { engine: 'bing', link: 'https://bing.com/' },
    { engine: 'yahoo', link: 'https://yahoo.com' },
    { engine: 'duckduckgo', link: 'https://duckduckgo.com' },
  ];

  return (
    <div className="ascend-search">
      <span class="ascend-search-icon">{icons[searchEngine]}</span>
      <input
        className="ascend-search-input"
        type="search"
        placeholder="Search..."
      />
      <button className="ascend-search-submit">{icons['search']}</button>
      <button
        className="ascend-search-options"
        onClick={() => setListActive(!listActive)}
      >
        {icons['options']}
      </button>

      <div
        className={`ascend-search-option-list ${
          listActive ? 'ascend-seach-option-list-active' : ''
        }`}
      >
        {searchEngines.map(({ engine, link }) => (
          <span>{icons[engine]}</span>
        ))}
      </div>
    </div>
  );
};

export default Search;
