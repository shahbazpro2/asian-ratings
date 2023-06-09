import { getMovieDetail } from "@/lib/getMovies"
import Details from "@/components/Detail/Detail"

export default async function Page({ params }: any) {
  const id = params.id
  const movie = await getMovieDetail(id)

  return <Details movie={movie} />
}
