import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import './quote.scss';

const Quote = () => {
  const url = 'https://zenquotes.io/api/today';
  const { data, loading, error } = useFetch(url);

  if (data) {
    return (
      <figure class="ascend-quote">
        <blockquote>"{data?.[0]?.q}"</blockquote>
        <figcaption>{data?.[0]?.a}</figcaption>
      </figure>
    );
  }
};

export default Quote;
