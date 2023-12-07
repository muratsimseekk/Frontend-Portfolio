import React from "react";

import { useSelector } from "react-redux";
import { selectData } from "../store/reducer";
function Information() {
  const dil = useSelector((state) => state.language);
  const allData = useSelector((state) => selectData(state));
  return (
    <div className="relative w-full h-max ">
      <div className="md:h-14 md:w-28 md:right-[10%] md:border-b-[16px] md:border-x-[16px] lg:h-20 lg:w-40 md:-top-0 xl:h-12 rounded-b-full xl:w-24 xl:right-1/4 xl:border-b-[16px] xl:border-x-[16px] xl:-top-0 border-zinc-300 dark:border-neutral-600 bg-white dark:bg-zinc-700 absolute "></div>
      <div className="absolute md:w-14 md:h-28 md:border-y-[16px] md:border-l-[16px] md:right-0 md:top-[56%] lg:top-1/2 lg:w-20 lg:h-40  xl:w-12 xl:h-24 xl:border-y-[16px] xl:border-l-[16px] xl:right-0 xl:top-[40%] rounded-l-full z-20 bg-white dark:bg-zinc-800  border-pink-600 "></div>
      <div className="absolute xl:w-24 xl:h-12 md:w-28 md:h-14  bg-neutral-600 rounded-r-full top-[30%]"></div>
      <div className="w-full py-24 lg:py-28 bg-white h-max dark:bg-zinc-700">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap gap-6 lg:gap-8  w-4/5 justify-center items-center xl:w-3/4 xl:h-3/4 relative xl:flex xl:justify-center xl:items-center xl:gap-6 ">
            <h1 className="absolute -top-16 md:text-5xl xl:-top-16 text-gray-950 dark:text-zinc-100 text-4xl xl:text-3xl font-normal tracking-wider">
              {`${allData.data.skills}`}
            </h1>
            {allData.skillList.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" w-[40%] flex flex-wrap justify-center md:w-1/3 lg:w-1/4 lg:py-8 xl:w-[12%] xl:h-1/2  xl:flex xl:flex-col xl:items-center xl:justify-around uppercase"
                >
                  <img className="w-full border xl:w-[75%] " src={item.src} />
                  <h3 className="tracking-widest md:text-2xl xl:text-sm dark:text-zinc-300">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full -z-10 relative bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
        <h2 className="absolute top-6 text-4xl lg:text-5xl xl:top-6 text-gray-950 dark:text-white xl:text-3xl font-normal tracking-wider">
          {`${allData.data.profile}`}
        </h2>
        <div className="w-4/5 py-24">
          <div className="w-full flex flex-col items-center gap-24 md:gap-12 md:items-center xl:flex xl:flex-row xl:justify-between xl:items-center">
            <div className=" w-full xl:w-[45%] md:w-4/5 bg-white dark:bg-neutral-600  py-5 md:py-10 rounded-xl relative flex flex-col justify-center gap-6 xl:gap-9 pl-6">
              <div className="w-full h-full absolute -bottom-3 left-3 -z-20 bg-neutral-600 dark:bg-opacity-50 rounded-xl"></div>
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl xl:text-2xl text-pink-600   ">
                  {`${allData.data.basicInfo}`}
                </h2>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col  justify-between gap-4 md:gap-9 text-black dark:text-white font-semibold">
                  {allData.profilCard.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="flex md:text-xl lg:text-2xl xl:text-base gap-6"
                      >
                        <h3>{item.name}</h3>
                        <p>{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="w-full md:w-11/12 xl:w-[45%] h-[70%] flex flex-col md:gap-6 xl:gap-10 justify-around">
              <div className="relative">
                <div className="bg-blue-300 absolute h-2 top-5 w-16 -left-2 md:top-6 md:h-3 md:w-20 xl:top-4 xl:h-5 xl:w-24 xl:-left-4 -z-10 rounded-md"></div>
                <h3 className="font-playfair font-light text-2xl z-20 md:text-3xl lg:text-4xl xl:text-2xl dark:text-white">
                  {`${allData.data.aboutMe}`}
                </h3>
              </div>
              <div className="flex flex-col gap-12 tracking-wide md:text-xl lg:text-2xl xl:text-base font-light leading-7  dark:text-white">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                </p>
                <p>
                  Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
                  quod deserunt quam temporibus cumque magnam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
