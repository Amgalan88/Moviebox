import Image from "next/image";
import { MovieCard } from "../_components/MovieCard";
import { MovieNavbar } from "../_components/MovieNavbar";
export const MovieList = () => {
  return (
    <div className=" w-[1277px] m-auto mt-[52px] flex flex-col gap-5 ">
      <div>
        <MovieNavbar />
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <div>
        <MovieNavbar />
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <div>
        <MovieNavbar />
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
