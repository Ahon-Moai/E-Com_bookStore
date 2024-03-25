import React from "react";
import victor from "../assets/victor.png";
import { featuredBooksData } from "./Data";
import Test from "./Test";
const Quality = () => {
  return (
    <>
      <div className="h-[800px] w-full">
        <div className="max-w-[1280px] mx-auto mt-56">
          <div className="text-center flex flex-col">
            <p className="text-stone-500 py-3">SOME QUALITYITEMS</p>
            <h1 className="font-light text-6xl font-serif ">Featured Books</h1>
            <img
              className="w-[50px] absolute left-[49%] mt-[150px]"
              src={victor}
              alt="/"
            />
          </div>
          <Test />
        </div>
      </div>
    </>
  );
};

export default Quality;
