import React from "react";

import linkedin from "../icons/brands/brand/LinkedIn.jpg";
import github from "../icons/brands/brand/github.jpg";
import darkLinkedin from "../photos/brand/darkLinkedin.jpg";
import darkGithub from "../photos/brand/github.svg";
import almilaFoto from "../photos/foto.jpg";
// import { datalar } from "../store/data";
import { useDispatch, useSelector } from "react-redux";
import { languageChange, themeChange } from "../store/action";
import axios from "axios";
function Header() {
  const dispatch = useDispatch();
  const tema = useSelector((state) => state.theme);

  const allData = useSelector((state) => state.data);
  console.log("allData", allData);

  console.log("tema", tema);

  const handleTheme = async () => {
    const response = await axios.post("https://reqres.in/api/theme", {
      theme: tema ? false : true,
    });
    dispatch(themeChange(response.data.theme));
    console.log("Tema degisimden gelen", response.data);
  };
  // const handleLanguage = async () => {
  //   const response = await axios.post("https://reqres.in/api/language", {
  //     language: dil,
  //   });
  //   dispatch(languageChange(response.data.language));
  //   console.log("Dil degisimden gelen", response.data);
  // };

  return (
    <div className="bg-zinc-100 w-full py-7 flex flex-col justify-evenly items-center dark:bg-zinc-800 dark:text-white xl:w-full relative md:gap-10 xl:flex xl:gap-12 xl:flex-col xl:justify-center ">
      <div className="md:h-28 md:rounded-full md:w-28 md:right-2/3 md:-top-12 lg:right-3/4 lg:h-32 lg:w-32 xl:h-24 xl:rounded-full xl:w-24 xl:right-2/3 bg-zinc-300 dark:bg-neutral-600 absolute xl:-top-12"></div>
      <div className="md:h-14 md:rounded-t-full md:w-28 md:right-[10%] md:border-t-[16px] md:border-x-[16px] md:absolute md:-bottom-0 lg:h-20 lg:w-40 xl:h-12 xl:rounded-t-full xl:w-24 xl:right-1/4 xl:border-t-[16px] xl:border-x-[16px] xl:absolute xl:-bottom-0 border-zinc-300 dark:border-neutral-600 bg-zinc-100 dark:bg-zinc-800 "></div>
      <div className="flex flex-col items-end gap-6 justify-end md:flex md:flex-row-reverse md:justify-between md:items-center md:pt-10 md:w-3/4 lg:pt-20 lg:w-4/5 w-full xl:flex xl:flex-row xl:justify-end xl:w-3/4 xl:mx-auto ">
        <div className=" md:flex md:gap-3 xl:flex xl:gap-3 xl:border-r-2 border-zinc-500">
          <div
            onClick={handleTheme}
            className="bg-pink-600 dark:bg-black hover:cursor-pointer dark:hover:cursor-pointer w-20 h-7  flex justify-end dark:justify-start duration-500 items-center rounded-full"
          >
            <div className="bg-amber-200 w-6 rounded-full h-[22px]"></div>
          </div>
          <h1 className="uppercase mr-4 md:text-xl lg:text-lg xl:text-base flex items-center text-neutral-500 dark:text-zinc-300 tracking-widest font-semibold ">
            {tema == true
              ? `${allData?.data.themeLight}`
              : `${allData?.data.themeDark}`}
          </h1>
        </div>
        <div className="flex md:text-xl lg:text-2xl xl:text-base items-center">
          <h1 className="uppercase pr-2 text-neutral-500 font-semibold tracking-widest">
            {" "}
            <span
              onClick={() => dispatch(languageChange())}
              className="text-pink-600 hover:cursor-pointer dark:hover:cursor-pointer"
            >
              {`${allData?.data.language}`}
            </span>
            {`${allData?.data.toLanguage}`}
          </h1>
        </div>
      </div>
      <div className="xl:flex xl:justify-center xl:items-center">
        <div className=" flex flex-col gap-8 items-center md:gap-16 lg:gap-24 xl:w-3/4 xl:flex xl:flex-row xl:gap-20 font-inter xl:tracking-widest">
          <div className="flex flex-col w-3/5 lg:w-4/5 lg:gap-16  xl:gap-10 justify-between gap-6 md:gap-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-light xl:text-2xl xl:text-start">{`${allData.data.greeting}`}</h1>
            <div className="text-4xl md:text-[40px] lg:text-5xl lg:text-start lg:leading-relaxed font-normal relative xl:text-2xl text-center xl:text-start xl:w-3/5 xl:leading-relaxed z-10">
              {`${allData?.data.mySelf}`}
              <br /> {`${allData?.data.meet}`}
              {/* <div className="absolute top-8 -left-4 w-32 h-7 -z-10 bg-pink-600 rounded-lg"></div> */}
            </div>
            <div className="flex gap-6 lg:gap-10 xl:gap-6 lg:justify-start justify-center">
              <button>
                <img
                  className="lg:w-16 xl:w-8"
                  src={`${tema ? darkLinkedin : linkedin}`}
                  alt="LinkedIn link"
                />
              </button>
              <button>
                <img
                  className="lg:w-16 xl:w-8"
                  src={`${tema ? darkGithub : github}`}
                  alt="Github link"
                />
              </button>
            </div>
            <p className="font-medium text-lg md:text-xl md:text-center lg:text-2xl lg:text-start xl:text-base xl:font-light xl:leading-relaxed ">
              {`${allData?.data.current}`}{" "}
              <span className="text-pink-600">{`${allData?.data.freelance}`}</span>
              {` ${allData?.data.asA}`}
              <span className="text-pink-600"> UX, UI, & Web Design</span>{" "}
              {`${allData?.data.project}`}
              <br />
              {`${allData?.data.invite}`} -{`>`}{" "}
              <span className="text-pink-600 underline">
                pratamaiosi@gmail.com
              </span>
            </p>
          </div>
          <div className="flex items-center justify-end lg:pb-10">
            <div className="relative z-30">
              <div className="absolute bg-pink-600 w-full h-full -top-4 -left-4 -z-20 rounded-3xl "></div>
              <img className="rounded-3xl z-50" src={almilaFoto} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute xl:w-24 xl:h-12 bg-pink-600 xl:top-3/4 xl:rounded-l-3xl xl:-right-0"></div>
    </div>
  );
}

export default Header;
