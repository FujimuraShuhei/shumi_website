import Link from 'next/link';
import React from 'react';

const arrowButton = () => {
  return (
    <Link href="/works">
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text"></span>
      </button>
    </Link>
  );
};

export default arrowButton;
