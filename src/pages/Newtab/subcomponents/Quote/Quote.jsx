import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Placeholder from '../Placeholder/Placeholder';
import './quote.scss';

const Quote = () => {
  const url = 'https://zenquotes.io/api/today';
  const { data, loading, error } = useFetch(url);

  if (error || data?.[0]?.a === 'zenquotes.io') {
    console.error('There was a problem getting the quote: ', error);
    return null;
  }

  // if (true) {
  //   return (
  //     <>
  //       <Placeholder height={90} />
  //       <Placeholder height={70} />
  //     </>
  //   );
  // }

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
