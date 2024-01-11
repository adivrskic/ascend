/*global chrome*/
import React, { useState, useEffect } from 'react';
import { flatten } from '../../utils';
import './bookmarks.scss';
const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState(null);
  const [activeBookmark, setActiveBookmark] = useState('');
  const [links, setLinks] = useState([]);
  const process = (bookmarks) => {
    setBookmarks(flatten(bookmarks?.[0]?.children));
  };

  useEffect(() => {
    setActiveBookmark(bookmarks?.[0]?.key);
    setLinks(bookmarks?.[0]?.children);
  }, [bookmarks]);

  useEffect(() => {
    const newLinks = bookmarks?.find((k) => k.key === activeBookmark);
    console.log(newLinks?.children);
    setLinks(newLinks?.children);
  }, [activeBookmark]);

  useEffect(() => {
    chrome.bookmarks.getTree((bm) => process(bm));
  }, []);

  return (
    <div className="ascend-bookmarks">
      <div className="ascend-bookmark-keys">
        {bookmarks?.map((bm) => (
          <div onClick={() => setActiveBookmark(bm.key)}>{bm.key}</div>
        ))}
      </div>
      <div className="ascend-bookmark-values">
        {links?.map((link) => (
          <a className="ascend-bookmark-link" href={link?.url}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
