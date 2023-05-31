"use client"

import { useEffect } from "react"

import MovieCard from "../MovieCard/MovieCard"

const MovieList = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzlhOTQ2ZmRkMWNiODI2ZWVhMDk5YTdjODJjNzllZiIsInN1YiI6IjVkMmRjMjRhNjZlNDY5MDAxMzgwMjQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JhztdkVcZ3QsqG50qQ3-ILAot1AIetISObmGYN082ps",
      },
    }

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <MovieCard />
    </div>
  )
}

export default MovieList
