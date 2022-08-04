import Seo from "./Seo";

import { useEffect, useState } from "react";
import MainCard from "../components/MainCard";

const API_KEYS = "04c09617e297192b6c05f565ecbb0a70";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS}&language=ko-KR&page=2`
        )
      ).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);

  return (
    <>
      <Seo title="HOME" content="🥕" />
      {movies.map((movie, index) => (
        <MainCard movie={movie} key={index} />
      ))}
    </>
  );
}
