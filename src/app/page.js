"use client";

import { Header } from "./_features/Header";
import { HeroSection } from "./_features/HeroSection";
import { UpcomingMovieList } from "./_features/UpcomingMovieList";
import { PopularMovieList } from "./_features/PopularMovieList";
import { TopratedMovieList } from "./_features/TopratedMovieList";
import { Footer } from "./_features/Footer";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto bg-white min-h-screen px-4 ">
      <Header />
      <HeroSection />
      <UpcomingMovieList />
      <PopularMovieList />
      <TopratedMovieList />
      <Footer />
    </div>
  );
}
