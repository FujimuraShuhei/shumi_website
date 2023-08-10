/* eslint-disable @next/next/no-img-element */
import { client } from 'libs/client';

export default function BlogId({ blog }) {
  return (
    <main>
      <div className="container mx-auto max-w-2xl mt-20">
        <img
          src={blog.eyecatch.url}
          width={640}
          height={320}
          alt="ブログアイキャッチ画像"
        />
        <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
        <p className="text-sm">{blog.publishedAt}</p>
        <div
          className="mt-10 mb-20"
          dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        />
      </div>
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
