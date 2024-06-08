import { NavLink } from "react-router-dom"
import Navlinks from "./Navlinks"

import Logo from "../../public/assets/shared/desktop/logo.svg"
import CartIcon from "../../public/assets/shared/desktop/icon-cart.svg"
import BurgerBtn from "../../public/assets/shared/tablet/icon-hamburger.svg"

function Navbar() {
  return (
    <div>
      <div className="bg-[#141414] pt-8">
        <div className="navbar align-element">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className=" btn btn-ghost lg:hidden">
                <img src={BurgerBtn} alt="Burger Btn" />
              </label>
              <ul className=" menu-sm dropdown-content mt-3 z-[1]  text-black border-xl">
                <Navlinks/>
              </ul>
            </div>
            <NavLink to="/" className=" lg:flex text-3xl items-center "><img src={Logo} alt="Logo" /></NavLink>

          </div>
          <div className="navbar-center">
            <ul className="gap-5 hidden lg:menu-horizontal">
              <Navlinks/>
            </ul>

          </div>
          <div className="navbar-end">
            <div className="btn btn-ghost btn-circle btn-md ml-4" >
              <div className="indicator">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <img src={CartIcon} alt="Cart icon" />
                    </div>
                  </div>
                  <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <NavLink to='/checkout'>
                          <button className="capitalize btn btn-primary btn-block">View cart</button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-2 "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
