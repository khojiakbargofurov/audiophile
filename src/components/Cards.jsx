import React from 'react';
import Zx9 from "../../public/assets/home/desktop/image-speaker-zx9.png";
import Zx7 from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import Yx1 from "../../public/assets/home/desktop/image-earphones-yx1.jpg";

import Zx9Tablet from "../../public/assets/home/tablet/image-speaker-zx9.png";
import Zx7Tablet from "../../public/assets/home/tablet/image-speaker-zx7.jpg";
import Yx1Tablet from "../../public/assets/home/tablet/image-earphones-yx1.jpg";

import Zx9Mobile from "../../public/assets/home/mobile/image-speaker-zx9.png";
import Zx7Mobile from "../../public/assets/home/mobile/image-speaker-zx7.jpg";
import Yx1Mobile from "../../public/assets/home/mobile/image-earphones-yx1.jpg";

function Cards() {
  return (
    <div className="align-element">
      <div className="rounded-lg bg-orange-400 grid lg:grid-cols-2 grid-cols-1 gap-11 p-16 items-center">
        <div className="justify-center">
          <picture className="max-w-[410px] pl-[117px]">
            <source media="(max-width:950px)" srcSet={Zx9Tablet} />
            <source media="(max-width:465px)" srcSet={Zx9Mobile} />
            <img src={Zx9} alt="ZX9 Speaker" style={{ width: '400px' }} />
          </picture>
        </div>
        <div className='flex flex-col gap-11 items-start'>
          <h2 className='text-4xl text-white uppercase'>ZX9 SPEAKER</h2>
          <p className='text-gray-600'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className='btn p text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none'>SEE PRODUCT</button>
        </div>
      </div>
      <div className="grid  lg:grid-cols-2 grid-cols-1 items-center justify-between p-4 rounded-lg relative">
        <div className="max-w-[349px ] gap-5 absolute" >
          <h2 className='text-4xl'>ZX7 SPEAKER</h2>
          <button className='btn p text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none'>SEE PRODUCT</button>
        </div>
        <div>
          <picture>
            <source media="(max-width:950px)" srcSet={Zx7Tablet} />
            <source media="(max-width:465px)" srcSet={Zx7Mobile} />
            <img className='rounded-lg' src={Zx7} alt="ZX7 Speaker" style={{ width: '1900' }} />
          </picture>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between p-4">
        <div>
          <picture>
            <source media="(max-width:950px)" srcSet={Yx1Tablet} />
            <source media="(max-width:465px)" srcSet={Yx1Mobile} />
            <img src={Yx1} alt="YX1 Earphones" style={{ width: 'auto' }} />
          </picture>
        </div>
        <div>
          <h2 className='text-4xl'>YX1 EARPHONES</h2>
          <button className='btn p text-white hover:bg-[#4C4C4C] w-40 h-12 bg-black border-none'>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
