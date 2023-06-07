import MovieList from "@/components/MovieList/MovieList"

async function fetchMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzlhOTQ2ZmRkMWNiODI2ZWVhMDk5YTdjODJjNzllZiIsInN1YiI6IjVkMmRjMjRhNjZlNDY5MDAxMzgwMjQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JhztdkVcZ3QsqG50qQ3-ILAot1AIetISObmGYN082ps",
    },
  }

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&limit=10",
    options
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function IndexPage() {
  const movies = await fetchMovies()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[1200px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Your Ultimate Destination <br className="hidden sm:inline" /> for
          Movie and TV Show Ratings
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Welcome to The Asian Rating, the go-to website for all your movie and
          TV show rating needs!
        </p>
        <MovieList movies={movies.results} />
      </div>
    </section>
  )
}
