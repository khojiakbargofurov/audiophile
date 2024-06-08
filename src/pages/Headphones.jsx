import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import BestGearComponent from '../components/BestGear';
import Features from '../components/Features';
import { customFetch } from '../utils';

const url = "/products";

export const loader = async () => {
  try {
    const req = await customFetch(url);
    const products = req.data.data;
    return { products };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { products: [] };
  }
};

function Headphones() {
  const { products } = useLoaderData();

  return (
    <>
      <div className=''>
        <div className="p-20 font-bold uppercase background-links bg-black">
          <h2 className="text-center text-white text-3xl">Headphones</h2>
        </div>
        <ul className="container flex flex-col mt-10 mb-10 gap-10 text-left items-center">
          {products.map((product) => {
            if (product.category === "headphones") {
              return (
                <div key={product.id}>
                  <li className="grid lg:grid-cols-2 grid-cols-1 text-left items-center gap-24 justify-center">
                    {product.id == 3 ? (
                      ""
                    ) : (
                      <img
                        src={product.categoryImage.desktop}
                        alt={product.name}
                        width={540}
                        height={560}
                      />
                    )}
                    <div className="lg:text-left flex flex-col gap-5 text-center">
                      <p className="letter_space_2">NEW PRODUCT</p>
                      <h2 className="text-4xl">{product.slug}</h2>
                      <p className="w-96">{product.description}</p>
                      <div className="w-full flex gap-5 flex-wrap flex-col">
                        <Link to={`/products/${product.slug}`}>
                          <button className="btn1">See Product</button>
                        </Link>
                      </div>
                    </div>
                    {product.id == 3 ? (
                      <img
                        src={product.categoryImage.desktop}
                        alt={product.name}
                        width={540}
                        height={560}
                      />
                    ) : (
                      ""
                    )}
                  </li>
                </div>
              );
            }
          })}
        </ul>
        <Features />
        <BestGearComponent/>
      </div>
    </>
  );
}

export default Headphones;
