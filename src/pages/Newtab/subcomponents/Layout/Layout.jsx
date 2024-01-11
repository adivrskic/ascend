import React, { useContext } from 'react';
import Bookmarks from '../Bookmarks';
import News from '../News';
import Quote from '../Quote';
import Search from '../Search';
import Today from '../Today';
import Todos from '../Todos';
import { StateContext } from '../../context/StateProvider';
import './layout.scss';

const Layout = () => {
  const [{ activeComponents }] = useContext(StateContext);
  const components = {
    bookmarks: <Bookmarks />,
    todos: <Todos />,
    search: <Search />,
    today: <Today />,
    quote: <Quote />,
    news: <News />,
  };

  return (
    <div className="ascend-layout">
      <div className="ascend-content">
        {activeComponents.map((c) => components[c])}
      </div>
    </div>
  );
};

export default Layout;
