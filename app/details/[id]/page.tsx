import { getMovieDetail } from "@/lib/fetchData"
import Details from "@/components/Detail/Detail"

interface Props {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const id = params.id
  const movie = await getMovieDetail(id)

  return <Details movie={movie} />
}
