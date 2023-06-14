import { search } from "@/lib/getMovies"
import Card from "@/components/Card/Card"

export default async function Page({ params }: any) {
  const query = params.query
  const searchResults = await search(query)
  const { results } = searchResults

  const renderResults = () => {
    return (
      <>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Best results for:
          <br className="hidden sm:inline" /> {query}
        </h1>
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {results.map((result: any) => {
            return <Card data={result} />
          })}
        </div>
      </>
    )
  }

  const noResultsFound = () => {
    return (
      <>
        <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {`Sorry, we can't find any results for "${query}"`}
        </h1>
        <p className="text-center text-3xl ">Please search again</p>
      </>
    )
  }

  return (
    <section className="container grid items-center gap-6 bg-auto bg-center bg-no-repeat pb-8 pt-6 md:py-10">
      {results.length === 0 ? noResultsFound() : renderResults()}
    </section>
  )
}
