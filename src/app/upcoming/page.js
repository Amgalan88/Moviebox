import Image from "next/image";

import Header from "./Upcome/Header";
import UpcomingSeeMoreMovieList from "./Upcome/UpcomingSeeMoreMovieList";
import { Footer } from "../_features/Footer";

export default function Upcoming() {
  return (
    <div>
      <Header />
      <UpcomingSeeMoreMovieList />
      <Footer />
    </div>
  );
}
