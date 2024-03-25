import React from "react";
import victor from "../assets/victor.png";
import { quoteData } from "./Data";
function Queto() {
  return (
    <>
      <div className="w-full h-full py-80 ">
        <h1 className="font-light text-6xl text-center font-serif ">
          Quote Of the Day
        </h1>
        <img className="px-80 ml-72 mt-10  " src={victor} alt="" />
        <div className="text-center py-20 text-3xl">
          <p>
            “The more that you read, the more things you will know. The more
            that you learn, the more places you’ll go.”
          </p>
          <p className="text-stone-600 text-[21px] py-16">Dr. Seuss</p>
        </div>
      </div>
    </>
  );
}

export default Queto;
