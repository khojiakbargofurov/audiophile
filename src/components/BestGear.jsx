import React from 'react';
import BestGearDesktop from "../../public/assets/shared/desktop/image-best-gear.jpg";
import BestGearTablet from "../../public/assets/shared/tablet/image-best-gear.jpg";
import BestGearMobile from "../../public/assets/shared/mobile/image-best-gear.jpg";

function BestGearComponent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center align-element row-reverse ">
      <div className="space-y-6 lg:text-left text-center">
        <h3 className="uppercase font-bold text-5xl ">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className=''>
        <source media="(max-width: 465px)" srcSet={BestGearMobile} />
        <source media="(max-width: 950px)" srcSet={BestGearTablet} />
        <img src={BestGearDesktop} alt="A collection of high-end audio gear displayed in a showroom" className="w-full" />
      </picture>
    </div>
  );
}

export default BestGearComponent;
