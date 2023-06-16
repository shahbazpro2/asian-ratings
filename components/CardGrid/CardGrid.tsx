"use client"

import Card from "../Card/Card"

interface Props {
  data: {
    results: []
  }
}

export default function MovieList({ data }: Props) {
  const movies = data.results

  return (
    <>
      <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {movies.length > 0 &&
          movies.map((movie: any) => {
            return <Card data={movie} />
          })}
      </div>
    </>
  )
}
