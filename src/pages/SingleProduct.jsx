import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../counterSlice";
import headphones from "../../public/assets/shared/desktop/category.png";
import audiophile from "../../public/assets/shared/desktop/image.png";
import earphones from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/?slug=${params.slug}`);
  const product = req.data.data[0];
  return { product };
};

function SingleProduct() {
  const dispatch = useDispatch();
  const { product } = useLoaderData();

  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type === "decrease" && productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    } else if (type === "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };

  const addToBag = () => {
    const newProduct = {
      ...product,
      amount: productAmount,
    };
    dispatch(addProduct(newProduct));
  };

  const dollarAmount = formatPrice(product.price);

  return (
    <>
      <div className="py-20">
        <p className="flex items-center pl-52 pb-4 text-[#7D7D7D]">Go Back</p>
        <div className="flex text-left items-center gap-24 justify-center flex-wrap w-full">
          <img
            src={`.${product.categoryImage.desktop}`}
            alt={product.name}
            width={540}
            height={560}
          />
          <div className="lg:text-left flex flex-col gap-5 text-start">
            <p className="letter_space_2">NEW PRODUCT</p>
            <h2 className="text-4xl">{product.slug}</h2>
            <p className="w-96">{product.description}</p>
            <p className="w-96">{dollarAmount}</p>
            <div className="max-w-6xl mx-auto flex flex-col">
              <div className="flex gap-5 items-center">
                <div className="flex items-center py-4 px-6 rounded-lg bg-[#F1F1F1] gap-10 justify-center text-xl">
                  <button
                    onClick={() => setAmount("decrease")}
                    disabled={productAmount === 1}
                  >
                    -
                  </button>
                  <h3>{productAmount}</h3>
                  <button onClick={() => setAmount("increase")}>
                    +
                  </button>
                </div>
                <button onClick={addToBag} className="btn1">
                  add to bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-20 justify-center gap-20 mx-auto px-56">
        <div className="w-2/3">
          <h1 className="text-black text-5xl pb-10">FEATURES</h1>
          <p>{product.features}</p>
        </div>
        <div className="w-1/3">
          <h1 className="text-black text-5xl pb-10">IN THE BOX</h1>
          <div>
            {product.includes.map((include, index) => (
              <div className="flex gap-4" key={index}>
                <h1 className="text-orange-400">{include.quantity}x</h1>
                <h1>{include.item}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="gap-5 flex justify-center items-center">
        <div>
          <img
            className="rounded-lg mb-5"
            src={`.${product.gallery.first.desktop}`}
            alt={product.name}
          />
          <img
            className="rounded-lg"
            src={`.${product.gallery.second.desktop}`}
            alt={product.name}
          />
        </div>
        <img
          className="rounded-lg"
          src={`.${product.gallery.third.desktop}`}
          alt={product.name}
        />
      </div>
      <div className="gap-5 flex justify-center items-center py-20">
        <div className="text-center">
          <img
            className="rounded-lg link_img_item_img mt-28 p-16 bg-[#F1F1F1]"
            width={370}
            height={221}
            src={headphones}
            alt="headphone img"
          />
          <div>
            <h4 className="my-5 text-2xl font-bold">XX99 MARK II</h4>
            <Link to="/products/xx99-mark-one-headphones">
              <button className="btn text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <img
            className="rounded-lg link_img_item_img mt-28 p-16 bg-[#F1F1F1]"
            width={370}
            height={221}
            src={audiophile}
            alt="headphone img"
          />
          <div>
            <h4 className="my-5 text-2xl font-bold">XX59</h4>
            <Link to="/products/zx9-speaker">
              <button className="btn text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <img
            className="rounded-lg link_img_item_img mt-28 p-16 bg-[#F1F1F1]"
            width={370}
            height={221}
            src={earphones}
            alt="headphone img"
          />
          <div>
            <h4 className="my-5 text-2xl font-bold">ZX9 SPEAKER</h4>
            <Link to="/products/yx1-earphones">
              <button className="btn text-white hover:bg-orange-300 w-40 h-12 bg-orange-500 border-none">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}

export default SingleProduct;
