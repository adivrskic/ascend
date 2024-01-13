import React, { useState } from 'react';
import { icons } from '../../icons';
import './search.scss';

const Search = () => {
  const [listActive, setListActive] = useState(false);
  const [searchEngine, setSearchEngine] = useState('google');
  const searchEngines = [
    { engine: 'google', link: 'https://google.com/' },
    { engine: 'duckduckgo', link: 'https://duckduckgo.com' },
    { engine: 'yahoo', link: 'https://yahoo.com' },
    { engine: 'bing', link: 'https://bing.com/' },
  ];

  const handleSearchEngineClick = (engine) => {
    setSearchEngine(engine);
    setListActive(false);
  };

  return (
    <div className="ascend-search">
      <span class="ascend-search-icon">{icons[searchEngine]}</span>
      <input
        className="ascend-search-input"
        type="search"
        placeholder="Search..."
      />
      <button
        className={`ascend-search-submit ${
          listActive ? 'ascend-search-option-list-active' : ''
        }`}
      >
        {icons['search']}
      </button>
      <button
        className={`ascend-search-options ${
          listActive ? 'ascend-search-option-list-active' : ''
        }`}
        onClick={() => setListActive(!listActive)}
      >
        {icons['options']}
      </button>

      <div
        className={`ascend-search-option-list ${
          listActive ? 'ascend-search-option-list-active' : ''
        }`}
      >
        {searchEngines.map(({ engine, link }) => (
          <span
            className={`ascend-search-option ${
              engine === searchEngine ? 'ascend-search-option-active' : ''
            }`}
            onClick={() => handleSearchEngineClick(engine)}
          >
            {icons[engine]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Search;
