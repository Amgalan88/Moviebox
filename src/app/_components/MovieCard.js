import Image from "next/image";
import { StarIcon } from "./icons/StarIcon";

export const MovieCard = () => {
  return (
    <div className="h-[439px] w-[229.73px]  bg-zinc-100 rounded-lg ">
      <div className="h-[340px] w-[229.73px]">
        {" "}
        <img
          src="/matrix.jpg"
          alt="My photo"
          className="w-full h-[340px] rounded-lg"
        />
      </div>
      <div className="w-[229.73px] h-[67px] ml-2 text-l">
        <div className="flex flex-row mt-2 gap-2 items-center">
          <StarIcon />
          <p>6.9/10</p>
        </div>

        <p>MATRIX RELOADED</p>
      </div>
    </div>
  );
};
