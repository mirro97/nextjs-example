import Seo from "./Seo";

import { useEffect, useState } from "react";

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
        <div className="card" key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="영화 포스터"
          />
          <div className="info">
            <h2>
              {movie.original_title} ( {movie.title} )
            </h2>
          </div>
        </div>
      ))}
    </>
  );
}
