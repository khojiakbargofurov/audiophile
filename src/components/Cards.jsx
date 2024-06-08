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
      <div className="grid lg:grid-cols-2 lg:gap-[138px] gap-4 grid-cols-1 items-center lg:justify-around justify-between bg-[#D87D4A] p-4">
        <div className="justify-center">
          <picture className="max-w-[410px] pl-[117px]">
            <source media="(max-width:950px)" srcSet={Zx9Tablet} />
            <source media="(max-width:465px)" srcSet={Zx9Mobile} />
            <img src={Zx9} alt="ZX9 Speaker" style={{ width: 'auto' }} />
          </picture>
        </div>
        <div>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
      <div className="grid  lg:grid-cols-2 grid-cols-1 items-center justify-between p-4">
        <div className="max-w-[349px]">
          <h2>ZX7 SPEAKER</h2>
          <button>SEE PRODUCT</button>
        </div>
        <div>
          <picture>
            <source media="(max-width:950px)" srcSet={Zx7Tablet} />
            <source media="(max-width:465px)" srcSet={Zx7Mobile} />
            <img src={Zx7} alt="ZX7 Speaker" style={{ width: 'auto' }} />
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
          <h2>YX1 EARPHONES</h2>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
