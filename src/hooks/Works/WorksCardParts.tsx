import React from 'react';
import { Carousel } from '@mantine/carousel';
import { motion } from 'framer-motion';
import works1 from '/public/images/works1.jpg';
import Image from 'next/image';

const WorksCardParts = () => {
  return (
    <motion.div
      className="w-[70%] ml-auto"
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
        withIndicators
        slideSize="60%"
        breakpoints={[{ maxWidth: 'md', slideSize: '80%' }]}
        slideGap="md"
        mx="auto"
        height={600}
        controlSize={60}
        styles={{
          control: {
            color: '#fff',
            background: 'rgb(15 23 42) !important',
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
            height={1000}
            alt="画像1"
            className="flex rounded-xl relative"
          />
          <p className="absolute  justify-center items-center">〇〇のサイト</p>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={works1}
            width={400}
            height={1000}
            alt="画像1"
            className="rounded-xl"
          />
          <p className="absolute  justify-center items-center">〇〇のサイト</p>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={works1}
            width={400}
            height={1000}
            alt="画像1"
            className="rounded-xl"
          />
          <p className="absolute  justify-center items-center">〇〇のサイト</p>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={works1}
            width={400}
            height={1000}
            alt="画像1"
            className="rounded-xl"
          />
          <p className="absolute  justify-center items-center">〇〇のサイト</p>
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={works1}
            width={400}
            height={1000}
            alt="画像1"
            className="rounded-xl"
          />
          <p className="absolute  justify-center items-center">〇〇のサイト</p>
        </Carousel.Slide>
      </Carousel>
    </motion.div>
  );
};

export default WorksCardParts;
