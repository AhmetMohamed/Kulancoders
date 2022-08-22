/** @format */

import React from 'react';
import Card from './Card';
import QnA from './QnA';
import Trends from './Trends';

const Main = () => {
  return (
    <div className='  w-full h-fit p-3 bg-Secondary text-slate-500 '>
      <div className='  mt-5 gap-6  flex justify-between w-11/12 m-auto'>
        <Card />
        <QnA />
        <Trends />
      </div>
    </div>
  );
};

export default Main;
