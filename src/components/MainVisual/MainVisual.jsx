import Image from 'next/image';
import React from 'react';
import styles from './MainVisual.module.css';
import mainpc from '/public/images/mainVisual_img.png';
import circle from '/public/images/mainCircle.png';
import mainSplush from '/public/images/main_splush.png';

const MainVisual = () => {
  return (
    <div>
      <section className={styles.mainVisual_section}>
        <div className="flex flex-col items-center justify-center">
          <div className={styles.mainBox}>
            <p className={styles.mainBox_renueul}>2023.02.20 RENEUAL</p>
            <h1 className={styles.main_h1}>WEBSITE</h1>
            <h1 className={styles.main_h1}>SOLUTION</h1>
            <p className={styles.main_p2}>『集客ができるサイト』に</p>
            <p className={styles.main_p3}>
              ニーズに合わせたプロフェッショナルなサイトをお作りいたします。
            </p>
          </div>
          <Image
            className={styles.mainCircle}
            width={567}
            src={circle}
            alt="サークル"
          />
        </div>
        <div className="flex items-center justify-start">
          <div className={styles.mainBox2}>
            <Image
              className={styles.mainpc}
              width={750}
              src={mainpc}
              alt="メインビジュアル画像"
            />
          </div>
          <Image className={styles.mainSplush} src={mainSplush} alt="" />
        </div>
      </section>
    </div>
  );
};

export default MainVisual;
