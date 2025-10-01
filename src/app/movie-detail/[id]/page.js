"use client";

import { Header } from "@/app/_features/Header";
import { Footer } from "@/app/_features/Footer";
import { Moredetail } from "@/app/_features/Moredetail";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UpcomingMovieList } from "@/app/_features/UpcomingMovieList";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

export default function MovieDetail() {
  const param = useParams();
  const { id } = param;
  const [movie, setMovie] = useState();
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const getData = async () => {
    const data = await fetch(url, options);
    const jsonData = await data.json();

    console.log("this is movie id", jsonData);
    setMovie(jsonData);
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!id) {
    return <div> something wrong here</div>;
  }

  return (
    <div>
      <Header />
      <Moredetail />
      <Footer />
    </div>
  );
}
