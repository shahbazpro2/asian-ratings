import { getTrendingMovies, getTrendingTvShows } from "@/lib/fetchData"
import MovieList from "@/components/MovieList/MovieList"
import SearchForm from "@/components/SearchForm/SearchForm"

export default async function IndexPage() {
  const responses = await Promise.allSettled([
    getTrendingMovies(),
    getTrendingTvShows(),
  ])

  const [moviesData, tvShowsData] = responses.filter(
    (response) => response.status === "fulfilled"
  ) as PromiseFulfilledResult<any>[]

  const movies = moviesData.value || []
  const tvShows = tvShowsData.value || []

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
        <SearchForm />
        <h2 className="my-4 text-2xl font-extrabold leading-tight md:text-3xl">
          Trending Movies
        </h2>
        <MovieList movies={movies.results} />
        <h2 className="my-4 text-2xl font-extrabold leading-tight md:text-3xl">
          Trending TV Shows
        </h2>
        <MovieList movies={tvShows.results} />
      </div>
    </section>
  )
}
