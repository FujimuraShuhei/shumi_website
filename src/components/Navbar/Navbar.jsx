import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.header}  font-bold sticky top-0 z-100"`}>
      <div className="md:container md:mx-auto flex justify-between h-20 items-center">
        <Link href="/">
          <h1 className="text-2xl tracking-widest font-['Open_Sans'] italic">
            Shumi
          </h1>
        </Link>
        <ul className="flex items-center text-sm">
          <Link href="/">
            <li className="ml-8">ホーム</li>
          </Link>
          <Link href="about">
            <li className="ml-8">私たちについて</li>
          </Link>
          <Link href="works">
            <li className="ml-8">制作実績</li>
          </Link>
          <Link href="blogs">
            <li className="ml-8">ブログ</li>
          </Link>
          <Link href="contact">
            <li className="ml-8">お問い合わせ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
