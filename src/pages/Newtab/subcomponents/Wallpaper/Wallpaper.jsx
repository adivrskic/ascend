import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './wallpaper.scss';

const Wallpaper = () => {
  const [loaded, setLoaded] = useState(false);
  const url =
    'https://wallhaven.cc/api/v1/search?q=+nature +minimalism -animated -people -words&categories=100&purity=100';
  const { data, loading, error } = useFetch(url);

  const wallpaper =
    data?.data?.[Math.floor(Math.random() * data?.data?.length)];

  return (
    <img
      className={`ascend-wallpaper ${loaded ? 'ascend-wallpaper-loaded' : ''}`}
      src={wallpaper?.path}
      alt="TODO"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default Wallpaper;
