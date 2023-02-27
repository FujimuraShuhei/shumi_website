import { Container } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import styles from './Cta.module.css';

const Cta = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-2">
        <div className={styles.ctaBox}>
            <div className={styles.ctaTextBox}>
              <h2 className="text-2xl">資料ダウンロード</h2>
              <pre>
                サービス資料をダウンロードいただけます。<br></br>
                サイト制作やコンサルをご検討の方はぜひ ご一読ください。
              </pre>
              <Link href="/shiryo">
                <button className={styles.ctaButton}>
                  資料をダウンロードする
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.ctaBox}>
            <div className={styles.ctaTextBox}>
              <h2 className="text-2xl">お問い合わせ</h2>
              <pre>
                オンラインでの無料相談をおこなっております。<br></br>
                まずはお気軽にお問い合わせください。
              </pre>
              <Link href="/contact">
                <button className={styles.ctaButton}>お問い合わせをする</button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div></div>
    </section>
  );
};

export default Cta;
