import { getMovieDetail } from "@/lib/fetchData"
import Details from "@/components/Detail/Detail"

export default async function Page({ params }: any) {
  const id = params.id
  const movie = await getMovieDetail(id)

  return <Details movie={movie} />
}
