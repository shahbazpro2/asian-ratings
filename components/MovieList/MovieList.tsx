"use client"

import { useEffect, useState } from "react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import MovieCard from "../MovieCard/MovieCard"
import MovieListSkeleton from "./MovieListSkeleton"

const MovieList = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzlhOTQ2ZmRkMWNiODI2ZWVhMDk5YTdjODJjNzllZiIsInN1YiI6IjVkMmRjMjRhNjZlNDY5MDAxMzgwMjQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JhztdkVcZ3QsqG50qQ3-ILAot1AIetISObmGYN082ps",
    },
  }

  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(true)

  const fetchMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&limit=10",
      options
    )

    const data = await res.json()
    setLoading(false)
    setMovies(data.results)
  }

  useEffect(() => {
    setLoading(true)
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* <Command>
        <CommandInput placeholder="Search for a Movie or TV show..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command> */}
      {isLoading ? (
        <MovieListSkeleton />
      ) : (
        <>
          <h2 className="my-4 text-2xl font-extrabold leading-tight md:text-3xl">
            Popular Movies
          </h2>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {movies.length > 0 &&
              movies.map((movie) => {
                return <MovieCard movie={movie} />
              })}
          </div>
        </>
      )}
    </>
  )
}

export default MovieList
