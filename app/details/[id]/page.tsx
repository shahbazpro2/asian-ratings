import Image from "next/image"

import { getTvSeriesDetails } from "@/lib/fetchData"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

const styles = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

interface Props {
  params: {
    id: string
  }
  searchParams: {
    type: string
  }
}

export default async function Page({ params }: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const id = params.id
  const data = await getTvSeriesDetails(id)

  const {
    poster_path,
    created_by,
    first_air_date,
    genres = [],
    last_episode_to_air,
    original_name,
    next_episode_to_air,
    number_of_episodes,
    number_of_seasons,
    overview,
    seasons = [],
  } = data

  return (
    <section className="container grid items-center gap-6 bg-auto bg-center bg-no-repeat pb-8 pt-6 md:py-10">
      <div>
        <p className="mb-2">
          Episode Guide
          <span>
            <Icons.arrowRight className="inline h-6 w-8 " />
          </span>
          {number_of_episodes}
        </p>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {original_name}
        </h1>
      </div>
      <div className="flex max-w-[1400px] ">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={original_name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "300px", height: "auto", maxWidth: 400 }} // optional
          />
        </div>
        <div className="pl-4">
          <p>
            <span>{first_air_date}</span>
          </p>
          <p className="text-lg">
            <span className="block font-semibold">Overview</span>
            {overview}
          </p>
          <div>
            {genres.map((genre: { id: number; name: string }) => (
              <Badge className="mr-1">{genre.name}</Badge>
            ))}
          </div>

          <p>Number of seasons: {number_of_seasons}</p>
          <p>Number of episodes: {number_of_episodes}</p>
        </div>
      </div>
    </section>
  )
}
