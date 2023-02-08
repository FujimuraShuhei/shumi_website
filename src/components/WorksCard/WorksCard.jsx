import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WorksCard = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-6xl'>Works</h2>
      <p>制作実績</p>
      <div className="carousel mt-10">
        <div id="slide1" className="carousel-item relative">
          <Image
            src="/images/main_img-800x1067.jpg"
            alt="works1"
            width={300}
            height={800}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative">
          <Image
            src="/images/main_img-800x1067.jpg"
            alt="works1"
            width={300}
            height={800}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative">
          <Image
            src="/images/main_img-800x1067.jpg"
            alt="works1"
            width={300}
            height={800}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative">
          <Image
            src="/images/main_img-800x1067.jpg"
            alt="works1"
            width={300}
            height={800}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
