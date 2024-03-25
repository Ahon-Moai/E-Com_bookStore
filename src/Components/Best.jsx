import React from "react";
import { sellingBooksData } from "./Data";
import victor from "../assets/victor.png";
import { CiDeliveryTruck } from "react-icons/ci";
import treePNG from "../assets/treeShape.png";
function Best() {
  return (
    <div className="py-80 w-full h-full bg-orange-50">
      {sellingBooksData.map(
        ({ img, infoTitleTop, infoTitle, desc, price }, id) => {
          return (
            <>
              <div className="max-w-[1280px] mx-auto">
                <div className="keys sm:flex sm:justify-between" id="main">
                  <div className="" id="left">
                    <img
                      className="sm:h-[620px] h-[520px]  "
                      id="edi"
                      src={img}
                      alt="/"
                    />
                    <img
                      className="sm:h-[420px] hidden  "
                      src={treePNG}
                      alt="/"
                    />
                  </div>
                  <div className=" sm: mt-10" id="right">
                    <div className="py-4">
                      <h1 id="best" className="text-6xl font-light font-serif">
                        Best Selling Books
                      </h1>
                      <img id="edi2" className="py-2" src={victor} />
                    </div>
                    <p id="edi3" className="text-stone-500 py-4 ">
                      {infoTitleTop}
                    </p>
                    <h1
                      id="edi4"
                      className="text-4xl py-2 font-light font-serif"
                    >
                      {infoTitle}
                    </h1>
                    <p id="edi5" className="text-stone-500 leading-8 w-[720px]">
                      {desc}
                    </p>
                    <p
                      id="edi6"
                      className="py-7 text-2xl text-orange-600 font-semibold font-mono"
                    >
                      {price}
                    </p>
                    <div className="">
                      <button className="mr-10 btn sm:duration-150 mt-12 py-2 px-8 border border-orange-700 font-semibold text-[2xl] hover:text-white hover:bg-orange-800">
                        Add to cart
                      </button>
                      <button className=" btn sm:duration-150 mt-12 py-2 px-8 border border-stone-700 font-semibold text-[2xl] hover:text-white hover:bg-stone-600">
                        Order now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
}

export default Best;
