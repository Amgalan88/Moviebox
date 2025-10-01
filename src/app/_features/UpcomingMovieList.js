import Image from "next/image";
import { MovieCard } from "../_components/MovieCard";
import { useState, useEffect } from "react";
import Link from "next/link";

const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export const UpcomingMovieList = () => {
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
    <div className=" w-[1277px] m-auto mt-[52px] flex flex-col gap-5 ">
      <div>
        <div className="flex flex-row justify-between">
          <div className="h-[32px] w-[250px] bg-zinc-100 rounded-lg pb-1">
            {" "}
            <p className="text-2xl text-foreground"> Upcoming </p>
          </div>
          <div className="h-[36px] w-[165px]  bg-zinc-100 rounded-lg ">
            <button
              id="btnid"
              onClick={() => {
                console.log("this is next page");
              }}
              className="flex gap-6 items-center"
            >
              <Link href={"/upcoming"}>
                <p className="text-[14px] ml-2 ">See more </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        {count.slice(0, 10).map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              rate={movie.vote_average}
              images={movie.backdrop_path}
              date={movie.release_date}
              movieId={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};
