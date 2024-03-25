import React from "react";
import { featuredBooksData } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import treePNG from "../assets/treeShape.png";
// Import Swiper styles
import "swiper/css";
function Test() {
  return (
    <>
      <div className="w-full h-[1000px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {featuredBooksData.map(({ name, price, img, writer }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="hidden sm:block max-w-[1280px] mx-auto py-28 cursor-grabbing">
                  <div>
                    <img className="shadow-md" src={img} alt="/" />
                    <div className="text-center mr-28 mt-4">
                      <p className="font-light font-serif text-2xl py-2">
                        {name}
                      </p>
                      <p className="text-stone-500">{writer}</p>
                      <p className="font-semibold text-orange-600 font-mono text-[19px] py-2 ">
                        {price}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {featuredBooksData.map(({ name, price, img, writer }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="block ml-16 sm:hidden max-w-[1280px] mx-auto py-28 cursor-grabbing">
                  <div>
                    <img className="shadow-md h-[455px]" src={img} alt="/" />
                    <div className="text-center mr-10 mt-4">
                      <p className="font-light font-serif text-2xl py-2">
                        {name}
                      </p>
                      <p className="text-stone-500">{writer}</p>
                      <p className="font-semibold text-orange-600 font-mono text-[19px] py-2 ">
                        {price}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/*  <p className="text-right px-2 text-[2xl] font-poppins font-bold mr-20">
          View All Products
        {"" + "->"} 
        </p> */}
      </div>
    </>
  );
}

export default Test;
