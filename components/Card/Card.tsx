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

import WatchList from "../WatchList/WatchList"

const Card = ({ data }: any = {}) => {
  //`https://placehold.co/300x400?text=${data.original_name}`
  return (
    <>
      <CardUI className="w-full">
        <Link
          href={{
            pathname: `/details/${data.id}`,
            query: { type: data.media_type },
          }}
        >
          <CardHeader>
            <Image
              className="w-50"
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "400px", height: "auto" }} // optional
            />
            <CardTitle className="!mt-5">{data.name}</CardTitle>
          </CardHeader>
        </Link>
        <CardFooter className="flex justify-between">
          <WatchList data={data} />
        </CardFooter>
      </CardUI>
    </>
  )
}

export default Card
