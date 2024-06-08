import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import BestGearComponent from '../components/BestGear';
import Features from '../components/Features';
import { customFetch } from '../utils';

const url = "/products";

export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data.data;
  return { products };
};

function Earphones() {
  const { products } = useLoaderData();

  return (
    <>
      <div>
        <div className="p-20 font-bold uppercase background-links bg-black">
          <h2 className="text-center text-white text-3xl">Earphones</h2>
        </div>
        <ul className="container flex flex-col mt-10 mb-10 gap-10 lg:justify-around justify-center items-center align-element">
          {products.map((product) => {
            if (product.category === "earphones") {
              return (
                <div key={product.id}>
                  <li className="grid lg:grid-cols-2  grid-cols-1 text-left items-center gap-24 justify-center flex-wrap w-full">
                    {product.id !== 6 && (
                      <img
                        src={product.categoryImage.desktop}
                        alt={product.name}
                        width={540}
                        height={560}
                      />
                    )}
                    <div className="lg:text-left  gap-5">
                      <p className="letter_space_2">NEW PRODUCT</p>
                      <h2 className="text-4xl">{product.slug}</h2>
                      <p className="">{product.description}</p>
                      <div className="w-full flex gap-5 flex-wrap flex-col">
                        <Link to={`/products/${product.slug}`}>
                          <button className="btn">See Product</button>
                        </Link>
                      </div>
                    </div>
                    {product.id === 6 && (
                      <img
                        src={product.categoryImage.desktop}
                        alt={product.name}
                        width={540}
                        height={560}
                      />
                    )}
                  </li>
                </div>
              );
            }
            return null;
          })}
        </ul>
        <Features className="lg:mb-40" />
        <BestGearComponent />
      </div>
    </>
  );
}

export default Earphones;
