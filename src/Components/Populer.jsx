import React, { useState } from "react";
import victor from "../assets/victor.png";
import { galleryData } from "./Data";
import popularbook1 from "../assets/PopularBooksImage/book1.png";
import popularbook2 from "../assets/PopularBooksImage/book2.png";
import popularbook3 from "../assets/PopularBooksImage/book3.png";
import popularbook4 from "../assets/PopularBooksImage/book4.png";
import popularbook5 from "../assets/PopularBooksImage/book5.png";
import popularbook6 from "../assets/PopularBooksImage/book6.png";
import popularbook7 from "../assets/PopularBooksImage/book7.png";
import popularbook8 from "../assets/PopularBooksImage/book8.png";
import Queto from "./Queto";
function Populer() {
  const [value, setValue] = useState(1);
  return (
    <div id="gallery" className="w-full h-[1000px] ">
      <div className="max-w-[1280px] mx-auto  bg-slate-50 mt-44">
        <div className="text-center flex flex-col" id="Title">
          <p className="text-stone-500 py-3">SOME QUALITYITEMS</p>
          <h1 className="font-light text-6xl font-serif ">Populer Books</h1>
          <img
            className="w-[50px] absolute left-[49%] mt-[150px]"
            src={victor}
            alt="/"
          />
        </div>
        <div
          id="Sections"
          className="py-28 ml-80 text-stone-600 font-sans font-bold text-1xl flex gap-10 "
        >
          <p className="text-orange-600 underline ">All</p>
          <p className="cursor-pointer hover:text-orange-600">BUSINESS</p>
          <p className="cursor-pointer hover:text-orange-600">TECHNOLOGY</p>
          <p className="cursor-pointer hover:text-orange-600">ADVENTURE</p>
          <p className="cursor-pointer hover:text-orange-600">ROMANTIC</p>
          <p className="cursor-pointer hover:text-orange-600">FINANCIAL</p>
        </div>
        <div id="flex" className="">
          {galleryData.map(({ name, price, image, writer }, id) => {
            return (
              // TODO: MAKE IT RESPONSIVE & FIX THE DESIGN

              <>
                <div
                  className="py-2 bg-orange-50
                "
                >
                  <div className="shadow-2xl border border-black py-2 flex ">
                    <div className="flex justify-between">
                      <img src={image} alt="/" />
                    </div>
                    <div className="py-12">
                      <h1 className="font-light text-6xl font-serif py-2">
                        {name}
                      </h1>
                      <p className="ml-2 ">{writer}</p>
                      <h3 className="text-[19px] py-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Atque at dolorum magni omnis inventore? Cumque
                        eveniet modi aliquid iure ipsa?
                      </h3>
                      <button
                        onClick={() => setValue(value - 1)}
                        className=" text-[19px] text-white py-1 px-3 bg-slate-950"
                      >
                        -
                      </button>
                      <input
                        className="w-[5%] py-2 outline-none text-center"
                        type="text"
                        placeholder="1"
                        value={value}
                      />
                      <button
                        onClick={() => setValue(value + 1)}
                        className="text-[19px] text-white py-1 px-3 bg-slate-950"
                      >
                        +
                      </button>

                      <div>
                        <button className="text-white mr-10 btn sm:duration-150 mt-12 py-2 px-8 border border-orange-700 font-semibold text-[2xl] hover:text-black bg-orange-800">
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
          })}
        </div>
        <Queto />
      </div>
    </div>
  );
}

export default Populer;
