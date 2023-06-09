import { getMovieDetail } from "@/lib/getMovies"
import Details from "@/components/Detail/Detail"

export default async function Page({ params }: any) {
  const query = params.query

  console.log(query)

  return (
    <section className="container grid items-center gap-6 bg-auto bg-center bg-no-repeat pb-8 pt-6 md:py-10">
      {query}
    </section>
  )
}
