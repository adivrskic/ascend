import React from 'react';
import Layout from './subcomponents/Layout';
import Toggle from './subcomponents/Toggle';
import Wallpaper from './subcomponents/Wallpaper';
import { StateProvider } from './context/StateProvider';
import './Newtab.scss';

const Newtab = () => {
  return (
    <StateProvider>
      <div className="ascend">
        <Layout />
        <Toggle />
        <Wallpaper />
      </div>
    </StateProvider>
  );
};

export default Newtab;
