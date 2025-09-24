import Image from "next/image";
import { ArrowIcon } from "./icons/ArrowIcon";

export const MovieNavbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="h-[32px] w-[250px] bg-zinc-100 rounded-lg pb-1">
        {" "}
        <p className="text-2xl text-foreground"> Upcoming </p>
      </div>
      <div className="h-[36px] w-[165px]  bg-zinc-100 rounded-lg ">
        <button className="flex gap-6 items-center">
          {" "}
          <p className="text-[14px] ml-2 ">See more </p>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
