// app/_components/Header.jsx
import Image from "next/image";
import { MoonIcon } from "@/app/_components/icons/MoonIcon";
import { DownVector } from "@/app/_components/icons/DownVector";
import { SearchIcon } from "@/app/_components/icons/SearchIcon";

export default function Header() {
  return (
    <div className="bg-white w-full h-[59px] flex items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        {/* next/image ашиглав */}
        <Image src="/Vector.png" alt="Logo" width={20} height={20} />
        <p>Movie Z</p>
      </div>

      <div className="w-full max-w-[488px] h-[36px] flex gap-3">
        <button className="h-[36px] px-3 rounded-md border flex items-center gap-2 cursor-pointer">
          <DownVector />
          <p>Genre</p>
        </button>

        <div className="flex items-center gap-2 border rounded-md w-full px-3">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full"
          />
        </div>
      </div>

      <div>
        <button className="border rounded-md p-1 cursor-pointer">
          <MoonIcon />
        </button>
      </div>
    </div>
  );
}
