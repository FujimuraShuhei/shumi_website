import Link from 'next/link';
import React from 'react';

const ServiceButton_01 = () => {
  return (
    <Link href="/service" className="mt-10">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">制作実績をみる</span>
      </button>
    </Link>
  );
};

export default ServiceButton_01;
