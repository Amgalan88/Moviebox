import Image from "next/image";
import { HeroSlider } from "../_components/HeroSlider";

export const HeroSection = () => {
  return (
    <div className="flex flex-row overflow-x-scroll gap-2 flex-nowrap">
      <HeroSlider />
    </div>
  );
};
