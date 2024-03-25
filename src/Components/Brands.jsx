import React from "react";

import Brand1 from "../assets/Brands/brand1.png";
import Brand2 from "../assets/Brands/brand2.png";
import Brand3 from "../assets/Brands/brand3.png";
import Brand4 from "../assets/Brands/brand4.png";
import Brand5 from "../assets/Brands/brand5.png";

const Brands = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="mt-32 sm:px-40 sm:py-40  ">
          <div className="flex bg-stone-200 w-full">
            <div>
              <img src={Brand1} alt="/" />{" "}
            </div>
            <div>
              <img src={Brand2} alt="/" />{" "}
            </div>
            <div>
              <img src={Brand3} alt="/" />{" "}
            </div>
            <div>
              <img src={Brand4} alt="/" />{" "}
            </div>
            <div>
              <img src={Brand5} alt="/" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
