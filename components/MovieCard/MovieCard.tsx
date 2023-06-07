import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const MovieCard = ({ movie }: any = {}) => {
  return (
    <a href={`/details/${movie.id}`}>
      <Card className="w-full">
        <CardHeader>
          <Image
            className="w-50"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={100}
          />
          <CardTitle className="!mt-5">{movie.title}</CardTitle>
          <CardDescription>{movie.release_date}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button>Add to watch list</Button>
        </CardFooter>
      </Card>
    </a>
  )
}

export default MovieCard
