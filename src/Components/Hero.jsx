import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bookImg from "../assets/HeaderBooks/book1.png";
import { headerBooks } from "./Data";
// Import Swiper styles
import HBook1 from "../assets/HeaderBooks/headerBook1.png";
import HBook2 from "../assets/HeaderBooks/headerBook2.png";
import HBook3 from "../assets/HeaderBooks/headerBook3.png";
import shaePI from "../assets/header-shape.svg";

import "swiper/css";

function Hero() {
  return (
    <>
      <div className="w-full h-full">
        <Swiper
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {headerBooks.map(({ title, info, img, btnLink }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="max-w-[1280px] mx-auto mt-32">
                  <div id="left" className="chk pt-80 sm:py-0">
                    <h1 className="text-[30px] font-serif mt-20  sm:text-[76px] font-light  sm:font-light  ">
                      {title}
                    </h1>
                    <p className="para w-[470px]  sm:font-medium sm:text-[16px] text-slate-500 py-3 leading-8 sm:w-[620px]">
                      {info}
                    </p>
                    <button className="btn sm:duration-150 mt-12 py-2 px-8 border border-stone-700 font-semibold text-[2xl] hover:text-white hover:bg-stone-800">
                      Learn More
                    </button>
                  </div>
                  <div className="absolute top-10 right-20">
                    <img
                      className="h-[455px] ml-9 sm:h-[450px]"
                      src={img}
                      alt="/"
                    ></img>
                  </div>
                </div>
                ==
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
