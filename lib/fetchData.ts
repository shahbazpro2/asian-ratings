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
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function getTrendingTvShows() {
  const res = await fetch(
    `${URL}/trending/tv/day?language=en-US&page=1&limit=10`,
    { cache: "no-cache", ...options }
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

async function getMovieDetail(id: string) {
  const res = await fetch(`${URL}/movie/${id}?language=en-US`, {
    cache: "no-cache",
    ...options,
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

// const api = 'feb6f0eeaa0a72662967d77079850353';
// const endpoint = `https://api.themoviedb.org/3/search/movie?query=${search}${api}`;

async function search(query: string) {
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

export { getTrendingMovies, getTrendingTvShows, getMovieDetail, search }
