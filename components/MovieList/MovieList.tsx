import Card from "../Card/Card"

export default function MovieList({ movies }: any) {
  return (
    <>
      <h2 className="my-4 text-2xl font-extrabold leading-tight md:text-3xl">
        Popular Movies
      </h2>
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {movies.length > 0 &&
          movies.map((movie: any) => {
            return <Card data={movie} />
          })}
      </div>
    </>
  )
}
