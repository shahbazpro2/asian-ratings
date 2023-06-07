const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzlhOTQ2ZmRkMWNiODI2ZWVhMDk5YTdjODJjNzllZiIsInN1YiI6IjVkMmRjMjRhNjZlNDY5MDAxMzgwMjQxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JhztdkVcZ3QsqG50qQ3-ILAot1AIetISObmGYN082ps",
  },
}

const getMovieDetails = async ({ id }) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&limit=10",
    options
  )

  const movies = await data.json()
  return movies
}

export default getMovieDetails
