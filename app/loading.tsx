import { Skeleton } from "@/components/ui/skeleton"

const loading = () => {
  const arrayEmpty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  console.log(arrayEmpty)

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
        {/* <SearchForm /> */}
        <Skeleton className="h-[40px] w-[300px] rounded-full" />

        <h2 className="my-4 text-2xl font-extrabold leading-tight md:text-3xl">
          Trending TV Shows
        </h2>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {arrayEmpty.map((i) => {
            return <Skeleton className="h-[400px] w-[300px]" />
          })}
        </div>
      </div>
    </section>
  )
}

export default loading
