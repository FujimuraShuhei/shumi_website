import Image from 'next/image';
import { Container } from 'postcss';
import React from 'react';
import styles from './Procedure.module.css';
import plan from '/public/images/plan.png';
import design from '/public/images/design.png';
import cording from '/public/images/cording.png';
import test from '/public/images/test.png';
import release from '/public/images/release.png';

const boxes = [
  {
    title: '企画',
    subTitle: 'PLAN',
    icon: plan,
    description: 'ワイヤーフレームを作り込み、構成・テキストを作成いたします',
    number: 1,
  },
  {
    title: '設計',
    subTitle: 'DESIGN',
    icon: design,
    description: '設計とテキストが決まった段階でデザインを作成していきます',
    number: 2,
  },
  {
    title: '実装',
    subTitle: 'CORDING',
    icon: cording,
    description:
      'デザインをもとにアニメーションや表示スピードなどのコーディングを行います',
    number: 3,
  },
  {
    title: 'テスト',
    subTitle: 'TEST',
    icon: test,
    description: '実装したものが乱れたり不備がないかのチェックを綿密に行います',
    number: 4,
  },
  {
    title: '公開',
    subTitle: 'RELEASE',
    icon: release,
    description: 'テストしたものを公開して、貴社でも運用できる形でお渡しします',
    number: 5,
  },
];

const Procedure = () => {
  return (
    <section className={styles.procedureSection}>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className={styles.procedure_h2}>PROCEDURE</h2>
          <p className="text-2xl">制作の流れ</p>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-2 sm:grid-cols-2 gap-4 text-center mt-20 ">
          {boxes.map((box, index) => (
            <div
              className={`col-span-1 ${styles.box} rounded-lg border-2 border-gray-500 mb-10`}
              key={index}>
              <div className="py-12 px-1 mb">
                <div className={styles.numberBox}>
                  <div className={styles.number}>{box.number}</div>
                </div>
                <div className={styles.title}>{box.title}</div>
                <div className={styles.subTitle}>{box.subTitle}</div>
                <div className={styles.icon}>
                  <Image src={box.icon} alt={box.subTitle} />
                </div>
                <div className={styles.description}>{box.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedure;
