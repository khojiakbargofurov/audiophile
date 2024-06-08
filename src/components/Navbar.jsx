import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Navlinks from "./Navlinks";

import Logo from "../../public/assets/shared/desktop/logo.svg";
import CartIcon from "../../public/assets/shared/desktop/icon-cart.svg";
import BurgerBtn from "../../public/assets/shared/tablet/icon-hamburger.svg";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../utils";
import { changeAmount, removeAll } from "../counterSlice";

function Navbar() {
  const { amount, products, price } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [shop, setShop] = useState(false);
  const dollarAmount2 = formatPrice(price);

  return (
    <div>
      <div className="bg-[#141414] pt-8">
        <div className="navbar align-element">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <img src={BurgerBtn} alt="Burger Btn" />
              </label>
              <ul className="menu-sm dropdown-content mt-3 z-[1] text-black border-xl">
                <Navlinks />
              </ul>
            </div>
            <NavLink to="/" className="lg:flex text-3xl items-center">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div className="navbar-center">
            <ul className="gap-5 hidden lg:menu-horizontal">
              <Navlinks />
            </ul>
          </div>
          <div className="navbar-end">
            {shop ? (
              <div className="modal-wrapper">
                <div className="overlay">
                  {amount === 0 ? (
                    <div className="modal shadow-2xl text-2xl text-center text-slate-400">
                      NO product
                    </div>
                  ) : (
                    <div className="modal shadow-2xl">
                      <div className="flex justify-between">
                        <h4>cart ({products.length})</h4>
                        <button onClick={() => dispatch(removeAll([]))}>
                          Remove all
                        </button>
                      </div>
                      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <tbody>
                            {products.map((product) => {
                              const dollarAmount = formatPrice(product.price);
                              return (
                                <tr
                                  key={product.id}
                                  className="items-center flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                  <td className="p-4">
                                    <img
                                      src={product.categoryImage.desktop}
                                      className="w-5 md:w-20 rounded-lg"
                                      alt={product.slug}
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white block">
                                    <p className="w-32">{product.slug}</p>
                                    <p className="text-[#808080]">{dollarAmount}</p>
                                  </td>
                                  <td className="px-4 py-2">
                                    <div className="flex items-center py-2 px-4 rounded-lg bg-[#F1F1F1] justify-center text-xl">
                                      <button
                                        onClick={() =>
                                          dispatch(
                                            changeAmount({
                                              id: product.id,
                                              type: "decrease",
                                            })
                                          )
                                        }
                                        disabled={product.amount <= 1}
                                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                      >
                                        <span className="sr-only">Quantity button</span>
                                        <svg
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 2"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 1h16"
                                          />
                                        </svg>
                                      </button>
                                      <div>
                                        <p className="text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          {product.amount}
                                        </p>
                                      </div>
                                      <button
                                        onClick={() =>
                                          dispatch(
                                            changeAmount({
                                              id: product.id,
                                              type: "increase",
                                            })
                                          )
                                        }
                                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                        type="button"
                                      >
                                        <span className="sr-only">Quantity button</span>
                                        <svg
                                          aria-hidden="true"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 18 18"
                                        >
                                          <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 1v16M1 9h16"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <div className="flex justify-between">
                        <h4>TOTAL</h4>
                        <h4>{dollarAmount2}</h4>
                      </div>
                      <Link to="/checkout">
                        <button
                          onClick={() => setShop(!shop)}
                          className="btn text-white mt-4 hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none"
                        >
                          checkout
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}

            <button
              type="button"
              className="relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg"
              onClick={() => setShop(!shop)}
            >
              <img
                className="hover:text-[#d87D4A] w-5 h-5 me-2"
                src={CartIcon}
                alt="Cart Icon"
              />
              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-3 -end-2">
                {amount}
              </div>
            </button>
            <hr className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
