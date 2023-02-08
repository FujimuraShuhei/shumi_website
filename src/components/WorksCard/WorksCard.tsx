import React from 'react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import works1 from '/public/images/works1.jpg';
import { Container } from '@mantine/core';

const WorksCard = () => {
  return (
    <Container size="lg">
      <div className="mt-20 mb-10">
        <h2 className="text-6xl text-slate-900">Works</h2>
        <p className="text-sm">制作実績</p>
      </div>
      <div className="w-[70%] ml-auto">
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
              background:'rgb(15 23 42) !important' ,
              width: 40,
              height: 40,
              opacity: 100,
              border: 'rgb(15 23 42)',
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
              className="rounded-xl"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              height={1000}
              alt="画像1"
              className="rounded-xl"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              height={1000}
              alt="画像1"
              className="rounded-xl"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              height={1000}
              alt="画像1"
              className="rounded-xl"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={works1}
              width={400}
              height={1000}
              alt="画像1"
              className="rounded-xl"
            />
          </Carousel.Slide>
        </Carousel>
      </div>
    </Container>
  );
};

export default WorksCard;
