import Image from "next/image";
import { MovieCard } from "../_components/MovieCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HeroSection } from "./HeroSection";
import { StarIcon } from "../_components/icons/StarIcon";

const url = "https://api.themoviedb.org/3/movie/${id}/credits?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const Moredetail = () => {
  const [count, setCount] = useState([]);
  const getData = async () => {
    const data = await fetch(url, options);
    const jsonData = await data.json();
    setCount(jsonData.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[1080px] h-auto bg-neutral-200 m-auto">
      <div className="max-w-[1080px] h-[72px] bg-neutral-300 flex flex-row justify-between p-2 mt-4">
        <div className="flex flex-col">
          <div>Wicked</div>
          <div>2024.11.26 · PG · 2h 40m</div>
        </div>
        <div className="flex flex-col ">
          <div>Rating</div>
          <div>
            <StarIcon />
          </div>
          <div>37k</div>
        </div>
      </div>
      <div className="max-w-[1080px] h-[428px] bg-neutral-300 flex flex-row justify-between">
        <div
          className="w-[290px] h-[428px]
            bg-amber-100"
        ></div>
        <div
          className="w-[760px] h-[428px]
            bg-amber-100"
        ></div>
      </div>

      <div
        className="w-[1080px] h-[271px]
            bg-amber-100 mt-4 flex-col gap-2"
      >
        <div className=" flex flex-row">
          <div
            className="w-[77px] h-[20px]
            bg-amber-300"
          >
            fantastic
          </div>
          <div
            className="w-[77px] h-[20px]
            bg-amber-300"
          >
            fantastic
          </div>
          <div
            className="w-[77px] h-[20px]
            bg-amber-300"
          >
            fantastic
          </div>
          <div
            className="w-[77px] h-[20px]
            bg-amber-300"
          >
            fantastic
          </div>
        </div>

        <div
          className="w-[1080px] h-[48px]
            bg-amber-200 mt-4 "
        >
          awdawd
        </div>

        <div
          className="w-[1080px] h-[163px]
            bg-amber-200 mt-4 "
        >
          awdawd
        </div>
      </div>
      <div
        className="w-[1080px] h-[500.88px]
            bg-amber-200 mt-4 flex flex-col"
      >
        <div className="w-full h-9 bg-transparent flex justify-between">
          <p>More like this</p>
          <button className="bg-amber-900 text-white">See more</button>
          <div
            className="flex flex-row justify-center content-center
          gap-4 w-[190px] h-[372.38px] mt-3"
          >
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  );
};
