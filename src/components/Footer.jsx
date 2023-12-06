import React from "react";
import { datalar } from "../store/data";
import { useSelector } from "react-redux";
function Footer() {
  const dil = useSelector((state) => state.language);
  return (
    <div className=" flex xl:flex md:py-10 dark:bg-zinc-700 justify-center">
      <div className="w-4/5  flex justify-center xl:w-4/5 xl:h-1/5  xl:flex xl:justify-center xl:items-center">
        <div className=" flex gap-3 md:gap-5 items-center xl:w-4/5 xl:h-3/4 xl:flex xl:justify-between">
          <div className=" xl:w-[70%] xl:h-full xl:flex xl:justify-end xl:items-center">
            <div className="text-xl md:text-3xl lg:text-4xl text-end xl:text-3xl dark:text-white xl:relative xl:text-end z-30 tracking-wider leading-relaxed">
              {`${datalar.data[dil].together}`} <br />{" "}
              {`${datalar.data[dil].work}`}
              <div className="xl:absolute xl:w-3/5 xl:h-4 xl:right-[50px] xl:top-6 xl:-z-20 xl:rounded-xl bg-sky-700"></div>
            </div>
          </div>
          <div className="text-sm md:text-lg lg:text-2xl xl:w-1/4 xl:h-full xl:flex xl:flex-col xl:justify-center xl:gap-1 xl:text-xl xl:leading-6 xl:tracking-wide">
            <p className="text-blue-600 dark:text-blue-300">Github</p>
            <p className="text-gray-950 dark:text-white">Personal Blog</p>
            <p className="text-sky-600 dark:text-blue-500">Linkedin</p>
            <p className="text-rose-700 dark:text-pink-600">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
