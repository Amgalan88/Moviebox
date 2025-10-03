import Image from "next/image";
import { MoonIcon } from "../_components/icons/MoonIcon";
import { DownVector } from "../_components/icons/DownVector";
import { SearchIcon } from "../_components/icons/SearchIcon";

export const Header = () => {
  return (
    <div className="bg-white w-full h-[59px] flex flex-row items-center justify-between ">
      <div className="pl-4 flex flex-row gap-1 items-center ">
        <img src="/Vector.png" alt="My photo" className="w-[20px] h-[20px] " />
        <p className="">Movie Z</p>
      </div>
      <div className="w-[488px] h-[36px] border-0 rounded-md  flex flex-row gap-6">
        <button className="w-[97px] h-[36px] border-1 rounded-md  flex flex-row items-center gap-2 cursor-pointer">
          <DownVector />
          <p>Genre</p>
        </button>

        <div className="flex flex-row gap-2 items-center border-1 rounded-md w-[379px] pl-4 ">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="pr-4">
        <button className="border-1 rounded-md cursor-pointer">
          <MoonIcon />
        </button>
      </div>
    </div>
  );
};
