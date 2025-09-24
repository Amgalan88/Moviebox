import Image from "next/image";
import { StarIcon } from "../_components/icons/StarIcon";
import { PlayIcon } from "../_components/icons/PlayIcon";

export const HeroSlider = () => {
  return (
    <div className="bg-white w-[1440px] h-[600px] flex items-center justify-between  mt-1 relative ">
      <img src="/Heroimage.jpg" className="w-full h-full" />
      <div className="w-full h-full absolute z-10 bg-amber-0 flex flex-col justify-center pl-33 text-white gap-4">
        <p>Now playing</p>
        <h1 className="text-3xl">Movie name</h1>
        <div className="flex flex-row gap-4">
          <StarIcon />
          <p>6.9/10</p>
        </div>
        <div className="w-[302px]">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </div>
        <button
          className="bg-white w-[145px] h-[40px] text-black cursor-pointer rounded-lg
        flex flex-row items-center pl-2 gap-2 "
        >
          <PlayIcon />
          <p> Watch Trailer</p>
        </button>

        <button className="bg-white z-10 w-10 h-10 rounded-full ml-[90%]"></button>
      </div>
    </div>
  );
};
