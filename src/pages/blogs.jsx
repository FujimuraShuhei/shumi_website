import Link from 'next/link';
import { client } from 'libs/client';

export default function Blogs({ category }) {
  return (
    <div>
      <ul>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  // カテゴリーコンテンツの取得
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blog: data.contents,
      category: categoryData.contents,
    },
  };
};
