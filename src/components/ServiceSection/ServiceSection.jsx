import Image from 'next/image';
import React from 'react';
import ServiceButton_01 from '../../hooks/Button/serviceButton_01';
import styles from './ServiceSection.module.css';
import servicebg from '/public/images/servicebg.jpg';
import service01_bg from '/public/images/service01_bg.jpg';
import service01 from '/public/images/service01.png';
import service02 from '/public/images/service02.jpg';
import service03 from '/public/images/service03.jpg';
const ServiceSection = () => {
  return (
    <section className={styles.serviceSection}>
      <div className="text-center">
        <h2 className={styles.service_h2}>SERVICE</h2>
        <p className="text-2xl">サービス内容</p>
      </div>
      <div className="flex items-center flex-col lg:flex-row mt-20">
        <div className="w-full lg:w-1/2 p-4 order-2 lg:order-1">
          <Image
            src={service02}
            alt="サービス写真1"
            quality={100}
            width={650}
            height={433}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div
          className={`"w-full lg:w-1/2 p-4 order-1 lg:order-2" ${styles.serviceBox}`}>
          <div className={styles.serviceTextbox}>
            <h3 className={styles.serviceTextbox_h3}>ホームページ制作</h3>
            <ul className={styles.serviceTextbox_ul}>
              <li>・建設業</li>
              <li>・医療</li>
              <li>・個人事業者向け</li>
            </ul>
            <div className="mt-10">
              <ServiceButton_01 />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col lg:flex-row mt-20">
        <div className="w-full lg:w-1/2 p-4 order-2 lg:order-1">
          <Image
            src={service03}
            alt="サービス写真1"
            quality={100}
            width={650}
            height={433}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div
          className={`"w-full lg:w-1/2 p-4 order-1 lg:order-2" ${styles.serviceBox}`}>
          <div className={styles.serviceTextbox}>
            <h3 className={styles.serviceTextbox_h3}>資料作成</h3>
            <ul className={styles.serviceTextbox_ul}>
              <li>・営業資料作成</li>
              <li>・パンフレット作成</li>
              <li>・チラシ作成</li>
            </ul>
            <div className="mt-10">
              <ServiceButton_01 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
