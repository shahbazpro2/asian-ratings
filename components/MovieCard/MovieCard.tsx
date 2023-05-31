"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const MovieCard = ({ movie }: any = {}) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <img
          className="w-50"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <CardTitle className="!mt-5">{movie.title}</CardTitle>
        <CardDescription>{movie.release_date}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button>Add to watch list</Button>
      </CardFooter>
    </Card>
  )
}

export default MovieCard
