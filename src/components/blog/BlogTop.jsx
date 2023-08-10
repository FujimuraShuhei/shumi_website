/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { client } from 'libs/client';

const BlogTop = ({ blog }) => {
  if (!blog) return null; // blogがなければ何も表示しない

  return (
    <div>
      <ul className="flex gap-10">
        {blog.map((blog) => (
          // eslint-disable-next-line react/jsx-key
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <img
                src={blog.eyecatch.url}
                width={640}
                height={320}
                alt="ブログアイキャッチ画像"
              />
              <h3 className="mt-8 text-xl font-bold">{blog.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogTop;

export const getServerSideProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: { limit: 3, orders: '-publishedAt' }, // 最新3記事を取得
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};
