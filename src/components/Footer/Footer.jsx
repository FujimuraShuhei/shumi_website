import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.footer} "py-20 text-white text-base mt-30"`}>
      <div className="flex flex-col justify-center md:w-2/5 lg:w-1/2">
        <svg
          width="50"
          height="200"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current md:ml-auto md:mr-auto lg:ml-0 lg:mr-auto"></svg>
        <p className="text-center md:text-left">
          神奈川県横浜市の
          <br />
          シンプルなサイトブランディングなら Shumi
        </p>
      </div>
      <div className="flex flex-col md:w-1/5 lg:w-1/4">
        <span className="footer-title">More</span>
        <Link href="/about" className="link link-hover">
          私たちについて
        </Link>
        <Link href="/works" className="link link-hover">
          制作実績
        </Link>
        <Link href="/blogs" className="link link-hover">
          ブログ
        </Link>
        <Link href="/contact" className="link link-hover">
          お問い合わせ
        </Link>
      </div>
      <div className="flex flex-col md:w-1/5 lg:w-1/4">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">利用規約</a>
        <a className="link link-hover">プライバシーポリシー</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
