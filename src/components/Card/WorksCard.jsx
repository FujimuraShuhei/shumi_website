/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="card card-compact w-96 shadow-xl">
        <figure className="w-100">
          <img
            src="https://placeimg.com/400/225/arch"
            layout="fill"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 shadow-xl">
        <figure>
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            layout="fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">タイトル2</h2>
          <p className="mb-4">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
