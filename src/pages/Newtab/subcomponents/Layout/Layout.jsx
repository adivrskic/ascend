import React, { useContext, useMemo } from 'react';
import Bookmarks from '../Bookmarks';
import News from '../News';
import Quote from '../Quote';
import Search from '../Search';
import Today from '../Today';
import Todos from '../Todos';
import { StateContext } from '../../context/StateProvider';
import './layout.scss';
import Placeholder from '../Placeholder/Placeholder';

const Layout = () => {
  const [{ activeComponents }] = useContext(StateContext);
  const components = useMemo(() => ({
    bookmarks: <Bookmarks />,
    todos: <Todos />,
    search: <Search />,
    today: <Today />,
    quote: <Quote />,
    news: <News />,
  }));

  return (
    <div className="ascend-layout">
      <div className="ascend-content">
        {activeComponents.map((c) => components[c])}
        {/* <Placeholder rows={3} /> */}
      </div>
    </div>
  );
};

export default Layout;
