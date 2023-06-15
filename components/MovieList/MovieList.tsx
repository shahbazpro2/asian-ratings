"use client"

import Card from "../Card/Card"

export default function MovieList({ movies }: any) {
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
