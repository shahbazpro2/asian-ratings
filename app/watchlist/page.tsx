"use client"

import { useEffect, useState } from "react"

const WatchListPage = () => {
  const [watchList, setWatchList] = useState([])

  const getCurrentWatchList = () => {
    return JSON.parse(localStorage.getItem("watchList") || "[]")
  }

  useEffect(() => {
    const currentWatchList = getCurrentWatchList()
    setWatchList(currentWatchList)
    console.log(currentWatchList)
  }, [])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Your Essential TV Series <br className="hidden sm:inline" /> Watchlist
        Guide
      </h1>

      {watchList.length > 0 ? (
        watchList.map((show: any) => <p>{show.name}</p>)
      ) : (
        <p>Not found</p>
      )}
    </section>
  )
}

export default WatchListPage
