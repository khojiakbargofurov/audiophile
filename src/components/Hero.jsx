//images
import HeroImage from "../../public/assets/home/desktop/Bitmap.png"
import HeroImageMobile from "../../public/assets/home/mobile/image-header.jpg"
import HeroImageTablet from "../../public/assets/home/tablet/image-header.jpg"
function Hero() {
  return (
    <div className="bg-[#141414] ">
      <div className="hero align-element">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <picture>
            <source className="absolute" media="(max-width:950px)" srcSet={HeroImageTablet} />
            <source className="absolute" media="(max-width:465px)" srcSet={HeroImageMobile} />
            <img src={HeroImage} alt="Hero image" style={{ width: 'auto'}} />
          </picture>
          
          <div className="text-white lg:relative absolute max-w-[398px] text-center lg:text-left ">
            <h4 className="text-[14px] capitalize leading-[19px] tracking-[10px] pb-6">NEW PRODUCT</h4>
            <h1 className="sm:text-6xl font-bold tracking-[2px] ">XX99 Mark II Headphones</h1>
            <p className="py-6">
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <button className="border-0 btn bg-[#D87D4A]">See Product</button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Hero;
