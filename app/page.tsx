import { getTrendingTvShows } from "@/lib/fetchData"
import { Skeleton } from "@/components/ui/skeleton"
import Card from "@/components/Card/Card"
import SearchForm from "@/components/SearchForm/SearchForm"

export default async function IndexPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  // Initiate both requests in parallel
  // const moviesData = getTrendingMovies()
  const tvShowsData = getTrendingTvShows()



  // Wait for the promises to resolve
  const [tvShows] = await Promise.all([tvShowsData])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[1400px] flex-col items-start gap-2">
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
          Trending TV Shows
        </h2>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {tvShows.results.length > 0 &&
            tvShows.results.map((tvShow: any) => {
              return <Card data={tvShow} />
            })}
        </div>
      </div>
    </section>
  )
}
