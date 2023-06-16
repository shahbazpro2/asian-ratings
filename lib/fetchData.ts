const URL = "https://api.themoviedb.org/3"

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
}

async function getTrendingMovies() {
  const res = await fetch(
    `${URL}/trending/movie/day?language=en-US&page=1&limit=10`,
    { cache: "no-cache", ...options }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function getTrendingTvShows() {
  const res = await fetch(
    `${URL}/trending/tv/day?language=en-US&page=1&limit=10`,
    { cache: "no-cache", ...options }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function getMovieDetail(id: string) {
  const res = await fetch(`${URL}/movie/${id}?language=en-US`, {
    cache: "no-cache",
    ...options,
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function getTvSeriesDetails(id: string) {
  const res = await fetch(`${URL}/tv/${id}?language=en-US`, {
    cache: "no-cache",
    ...options,
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function searchMulti(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      cache: "no-cache",
      ...options,
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function searchTvShow(query: string) {
  const res = await fetch(
    `${URL}/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      cache: "no-cache",
      ...options,
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export {
  getTrendingMovies,
  getTrendingTvShows,
  getMovieDetail,
  searchMulti,
  searchTvShow,
  getTvSeriesDetails,
}
