import Card from '../components/Card/WorksCard';
import React from 'react';

const works = () => {
  return (
    <div className="w-4/6 mx-auto mt-20">
      <div>
        <h1 className="text-3xl font-bold">制作実績</h1>
        <p className="mt-2">私たちのWebサイトの制作物を紹介いたします。</p>
      </div>
      <div className="mt-20">
        <Card />
      </div>
    </div>
  );
};

export default works;
