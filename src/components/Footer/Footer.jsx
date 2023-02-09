import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-900 text-base-content mt-20">
      <div>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"></svg>
        <p>
        神奈川県横浜市の
          <br />
          シンプルなサイトブランディングなら Shumi
        </p>
      </div>
      <div>
        <span className="footer-title">More</span>
        <Link href="/about" className="link link-hover">
          私たちについて
        </Link>
        <Link href="/works" className="link link-hover">
          制作実績
        </Link>
        <Link href="/blog" className="link link-hover">
          ブログ
        </Link>
        <Link href="/contact" className="link link-hover">
          お問い合わせ
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">利用規約</a>
        <a className="link link-hover">プライバシーポリシー</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
