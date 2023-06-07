import Details from "@/components/Detail/Detail"

async function getData(id: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzlhOTQ2ZmRkMWNiODI2ZWVhMDk5YTdjODJjNzllZiIsInN1YiI6IjVkMmRjMjRhNjZlNDY5MDAxMzgwMjQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JhztdkVcZ3QsqG50qQ3-ILAot1AIetISObmGYN082ps",
    },
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function Page({ params }: any) {
  const id = params.id
  const movie = await getData(id)

  console.log(movie)

  return <Details movie={movie} />
}
