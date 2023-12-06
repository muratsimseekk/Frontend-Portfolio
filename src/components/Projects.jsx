import React from "react";
import darkArrow from "../icons/brands/brand/darkArrow.svg";
import lightArrow from "../icons/brands/brand/arrow-right.svg";
import { useSelector } from "react-redux";
import { datalar } from "../store/data";

function Projects() {
  const dil = useSelector((state) => state.language);
  const tema = useSelector((state) => state.theme);
  return (
    <div className="w-full bg-white dark:bg-zinc-700 dark:text-white py-8 flex flex-col  items-center">
      <div className="w-4/5 flex flex-col gap-10 ">
        <div className="w-full flex justify-center items-center">
          <h2 className="text-gray-950 dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-3xl font-normal tracking-wider">
            {`${datalar.data[dil].projects}`}
          </h2>
        </div>
        <div className="w-full flex flex-col gap-10 lg:gap-12 xl:flex xl:flex-row flex-wrap ">
          {datalar.projectCard[dil].map((item, i) => {
            return (
              <div
                key={i}
                className={`w-full xl:w-[47%] py-6 px-4 md:py-10 md:px-6 lg:py-14 lg:px-8 ${
                  i % 2 == 0
                    ? " bg-blue-100 dark:bg-gray-800"
                    : "bg-green-100 dark:bg-neutral-600"
                } bg-blue-100 dark:bg-gray-800 flex justify-center items-end rounded-lg`}
              >
                <div className="xl:w-[90%]">
                  <div className="xl:h-2/3 w-full flex flex-col gap-8 md:gap-10 lg:gap-12 justify-between">
                    <h3 className="text-3xl md:text-4xl xl:text-3xl font-playfair font-medium tracking-wider ">
                      {item.name}
                    </h3>
                    <p className="font-inter font-light tracking-wide md:text-xl lg:text-2xl xl:text-lg leading-7">
                      {item.description}
                    </p>
                    <div className="flex gap-x-3 gap-y-1 w-3/4 md:gap-y-2 lg:gap-x-4 lg:gap-y-3 lg:w-3/5 xl:w-5/6 flex-wrap">
                      {item.skills.map((yet, i) => {
                        return (
                          <p
                            key={i}
                            className="bg-white dark:bg-neutral-500 xl:text-lg md:text-xl md:w-28 xl:h-10 xl:w-20 md:h-12 w-24 h-9 rounded-full flex justify-center items-center tracking-wider font-bold font-playfair"
                          >
                            {yet}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex justify-between  ">
                      <p className="  font-semibold text-lg md:text-2xl lg:text-3xl xl:text-xl">
                        View on Github
                      </p>
                      <div className="flex w-2/5 justify-end">
                        <p className="font-semibold text-lg md:text-2xl lg:text-3xl xl:text-xl hover:cursor-pointer">
                          Go To App
                        </p>
                        <img src={`${tema == true ? darkArrow : lightArrow}`} />
                      </div>
                    </div>
                  </div>
                  <div className="h-28 md:h-44 lg:h-60 xl:h-40 w-full relative">
                    <div className="w-full h-full absolute top-10 md:top-16 lg:top-[90px] xl:top-1/2">
                      <div className="w-full h-full ">
                        <img className="w-full h-full" src={item.img} />
                        <img
                          className="absolute rounded-sm bg-cover h-[75%] xl:h-[76.6%] top-[7.8px] xl:w-[48%] left-[27.6%] md:left-[31.8%] lg:h-[75.6%] lg:left-[30%] lg:top-[13px] xl:top-2 xl:left-[26%]"
                          src={item.insideImg}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
