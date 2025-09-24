import Image from "next/image";
import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { MovieList } from "./_features/MovieList";
import { Footer } from "./_features/Footer";
import { useState, useEffect } from "react";

TMDB_BASE_URL: https://api.themoviedb.org/3



const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzZiMzEwNzJlZDg5ODcwMzQxM2Y0NzkyYzZjZTdjYyIsIm5iZiI6MTczODAyNjY5NS44NCwic3ViIjoiNjc5ODJlYzc3MDJmNDkyZjQ3OGY2OGUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.k4OF9yGrhA2gZ4VKCH7KLnNBB2LIf1Quo9c3lGF6toE",
  },
};

GET: /movie/upcoming?language=en-US&page









export default function Home() {
  return (
    <div className="w-[1440px] m-auto bg-white h-auto ">
      <Header />
      <HeroSection />
      <MovieList />
      <Footer />
    </div>
  );
}
