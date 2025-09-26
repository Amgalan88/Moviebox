// app/_components/Header.jsx
import Image from "next/image";

import Header from "./Upcome/Header";
import UpcomingSeeMoreMovieList from "./Upcome/UpcomingSeeMoreMovieList";

export default function Upcoming() {
  return (
    <div>
      <Header />
      <UpcomingSeeMoreMovieList />
      <Footer />
    </div>
  );
}
