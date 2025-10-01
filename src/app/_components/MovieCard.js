import Image from "next/image";
import { StarIcon } from "./icons/StarIcon";
import { router, useRouter } from "next/navigation";
import { use } from "react";

export const MovieCard = (props) => {
  const { title, rate, images, date, movieId } = props;
  console.log("this is movie id", movieId);

  const router = useRouter();
  console.log("this is movie id", movieId);

  const handleClickMovie = () => {
    router.push(`movie-detail/${movieId}`);
  };

  return (
    <div
      className="h-[439px] w-[229.73px]  bg-zinc-100 rounded-lg cursor-pointer"
      onClick={handleClickMovie}
    >
      <div className="h-[340px] w-[229.73px]">
        {" "}
        <img
          src={`https://image.tmdb.org/t/p/original${images}`}
          alt="My photo"
          className="w-full h-[340px] rounded-lg"
        />
      </div>
      <div className="w-[229.73px] h-[67px] ml-2 text-l">
        <div className="flex flex-row mt-2 gap-2 items-center">
          <StarIcon />
          <p>{rate}</p>
        </div>

        <p>{title}</p>
        <p className="opacity-50">
          {" "}
          <span className="opacity-50">Date:</span> {date}
        </p>
      </div>
    </div>
  );
};
