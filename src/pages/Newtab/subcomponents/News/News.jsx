import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Placeholder from '../Placeholder/Placeholder';
import './news.scss';

const News = () => {
  const url =
    'https://newsdata.io/api/1/news?apikey=pub_36169b2d53c90de279bed09d3fe1f1b0c467e&country=us&category=top&language=en&image=1';
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return (
      <div className="ascend-news">
        <Placeholder rows={4} heights={[65, 65, 65, 65]} />
      </div>
    );
  }
  console.log('news: ', data, loading, error);
  return (
    <div className="ascend-news">
      {data?.results?.map((res) => (
        <a href={res.link} className="ascend-news-item">
          <img src={res.image_url} alt={res.title} />
          <div>
            <h2>{res.title}</h2>
            <p>{res.content}</p>
            <span>{res.pubDate.split(' ')[0]}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
