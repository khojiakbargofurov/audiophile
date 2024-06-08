import React from "react";
import { Link } from "react-router-dom";

const Trash = () => {
  return (
    <>
      <div className="absolute mt-96  right-0 -top-96 hidden flex-col bg-gray-500  text-black w-52 p-5 h-96">
        <div className="flex items-center justify-between">
          <h3>
            Cart(<span id="product-counter">3</span>)
          </h3>
          <button>Remove all</button>
        </div>
      </div>
    </>
  );
};

export default Trash;
