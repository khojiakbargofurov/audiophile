// React router dom
import { NavLink } from "react-router-dom"

//IMAGES 
import Headphones from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png"
import Speakers from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png"

function Features() {
  return (
    <div className="align-element lg:pt-[120px] lg:pb-[168px] md:pt-[96px] md:pb-[96px] pt-[40px] pb-[120px] " >
      <div className="grid sm:grid-cols-3 grid-cols-1 items-center justify-around lg:gap-[30px] md:gap-[10px]  gap-4">
        <div className="card items-center m-20 lg:m-0">
          <img src={Headphones} alt="HEADPHONES" className="max-w-52 absolute bottom-16" />
          <div className="bg-[#F1F1F1] lg:w-[300px] sm:w-[223px] w-[327px] pt-28 pb-[30px] text-center" >
            <h3>HEADPHONES</h3>
            <NavLink to="/headphones" className="flex items-center gap-3 justify-center">
              <h4 className="text-[#D87D4A]">
                SHOP
              </h4>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </NavLink>
          </div>
        </div>  
        <div className="card items-center m-20 lg:m-0">
          <img src={Speakers} alt="Speakers" className="max-w-52 absolute bottom-16" />
          <div className="bg-[#F1F1F1] lg:w-[300px] sm:w-[223px] w-[327px] pt-28 pb-[30px] text-center" >
            <h3>SPEAKERS</h3>
            <NavLink to="/speakers" className="flex items-center gap-3 justify-center">
              <h4 className="text-[#D87D4A]">
                SHOP
              </h4>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </NavLink>
          </div>
        </div> 
        <div className="card items-center m-20 lg:m-0">
          <img src={Earphones} alt="EARPHONES" className="max-w-56 absolute bottom-16" />
          <div className="bg-[#F1F1F1] lg:w-[300px] sm:w-[223px] w-[327px] pt-28 pb-[30px] text-center" >
            <h3>EARPHONES</h3>
            <NavLink to="/earphones" className="flex items-center justify-center gap-3 text-center">
              <h4 className="text-[#D87D4A]">
                SHOP
              </h4>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </NavLink>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Features
