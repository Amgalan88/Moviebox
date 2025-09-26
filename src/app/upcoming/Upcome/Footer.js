import Image from "next/image";
import { EmailIcon } from "@/app/_components/icons/EmailIcon";
import { MoonIcon } from "@/app/_components/icons/MoonIcon";
import { PhoneIcon } from "@/app/_components/icons/PhoneIcon";

export default function Footer() {
  return (
    <div className=" w-full h-[280px] bg-indigo-700 mt-[51px] flex items-center justify-center">
      <div className="w-[1280px] h-[200px] text-white flex justify-between">
        <div className="gap-4 flex flex-col ">
          <div className="flex flex-row gap-4">
            <img src="/LastVector.png" />
            <p className="">Movie Z</p>
          </div>
          <p> © 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className="w-[913px] h-[200px] flex justify-end gap-[96px] ">
          <div className="w-[174px] h-[200px] flex flex-col gap-4">
            <p>Contact Information</p>
            <div className="flex flex-row items-center gap-2">
              <EmailIcon />
              <div className="flex flex-col text-[14px] gap-0">
                <p>Email</p>
                <p>support@movieZ.com</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div>
                <PhoneIcon />
              </div>

              <div>
                <p>Phone</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="w-[274px] h-[52px] gap-4 flex flex-col">
            <p>Follow us </p>
            <div className="flex flex-row gap-5">
              <p>Facebook </p>
              <p>Instagram </p>
              <p>X</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
