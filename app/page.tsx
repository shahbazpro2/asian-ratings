import MovieList from "@/components/MovieList/MovieList"

export default function IndexPage() {
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
        <MovieList />
      </div>
    </section>
  )
}
