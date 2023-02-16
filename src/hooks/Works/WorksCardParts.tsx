import React from 'react';
import { Carousel } from '@mantine/carousel';
import { motion } from 'framer-motion';
import works1 from '/public/images/works1.jpg';
import Image from 'next/image';
import TopButton from '../Button/WorksButton';

const WorksCardParts = () => {
  return (
    <div className="flex items-center">
      <motion.div
        className="w-[100%] ml-auto"
        variants={{
          offscreen: {
            // 画面外の場合のスタイル
            x: -100,
            opacity: 0,
          },
          onscreen: {
            // 画面内の場合のスタイル
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          },
        }}
        initial="offscreen" // 初期表示はoffscreen
        whileInView="onscreen" // 画面内に入ったらonscreen
        viewport={{ once: true, amount: 0.6 }}>
        <Carousel
          slideSize="30%"
          breakpoints={[{ maxWidth: 'xl', slideSize: '100%' }]}
          slideGap="xl"
          mx="auto"
          height={600}
          controlSize={60}
          styles={{
            control: {
              background: 'rgb(15 23 42)',
              color: '#fff',
              width: 40,
              height: 40,
              opacity: 100,
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              alt="画像1"
              className="rounded-xl mb-2"
            />
            <p className="absolute justify-center items-center">〇〇のサイト</p>
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              alt="画像1"
              className="rounded-xl mb-2"
            />
            <p className="absolute  justify-center items-center">
              〇〇のサイト
            </p>
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              alt="画像1"
              className="rounded-xl mb-2"
            />
            <p className="absolute  justify-center items-center">
              〇〇のサイト
            </p>
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              alt="画像1"
              className="rounded-xl mb-2"
            />
            <p className="absolute  justify-center items-center">
              〇〇のサイト
            </p>
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              alt="画像1"
              className="rounded-xl mb-2"
            />
            <p className="absolute  justify-center items-center">
              〇〇のサイト
            </p>
          </Carousel.Slide>
        </Carousel>
      </motion.div>
    </div>
  );
};

export default WorksCardParts;
