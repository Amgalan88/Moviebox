import Image from "next/image";
import { MovieCard } from "../_components/MovieCard";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HeroSection } from "./HeroSection";

const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
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
    <div className="max-w-[1080px] mh-[524px] bg-neutral-200 m-auto ">
      <div className="max-w-[1080px] h-[72px] bg-neutral-300 flex flex-row justify-around ">
        <div className="flex flex-col">
          <div>awd</div>
          <div>awd</div>
        </div>
        <div className="flex flex-col">
          <div>awd</div>
          <div>awd</div>
          <div>awd</div>
        </div>
      </div>
      <div className="max-w-[1080px] h-[428px] bg-neutral-300 flex flex-row justify-between">
        <div>awd</div>
        <div>awd</div>
      </div>
    </div>
  );
};
