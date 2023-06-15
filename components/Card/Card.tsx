import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as CardUI,
} from "@/components/ui/card"

const Card = ({ data }: any = {}) => {
  return (
    <Link
      href={{
        pathname: `/details/${data.id}`,
        query: { type: data.media_type },
      }}
    >
      <CardUI className="w-full">
        <CardHeader>
          <Image
            className="w-50"
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={data.title}
            width={500}
            height={100}
          />
          <CardTitle className="!mt-5">{data.title}</CardTitle>
          <CardDescription>{data.release_date}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button>Add to watch list</Button>
        </CardFooter>
      </CardUI>
    </Link>
  )
}

export default Card
