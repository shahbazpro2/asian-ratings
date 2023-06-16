"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  data: {
    id: string
    name: string
    poster_path: string
  }
}

const WatchList = ({ data }: Props) => {
  const { toast } = useToast()

  const { id, name, poster_path } = data

  const [inWatchList, setWatchlist] = useState(false)

  const getCurrentWatchList = () => {
    return JSON.parse(localStorage.getItem("watchList") || "[]")
  }

  const findShow = (currentWatchList: any) => {
    return currentWatchList.find((watchList: any) => watchList.id === id)
  }

  useEffect(() => {
    const currentWatchList = getCurrentWatchList()
    if (findShow(currentWatchList)) {
      setWatchlist(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToWatchList = (id: string, name: string, poster_path: string) => {
    const currentWatchList = getCurrentWatchList()

    // Add id, name, dateAdded, poster path
    const tvShow = {
      id,
      name,
      poster_path,
      dateAdded: new Date(),
    }

    if (findShow(currentWatchList)) {
      console.log(name, " is already added to watch list")

      return
    }

    currentWatchList.push(tvShow)
    localStorage.setItem("watchList", JSON.stringify(currentWatchList))
    setWatchlist(true)
  }

  const removeFromWatchList = (id: string) => {
    const currentWatchList = getCurrentWatchList()
    const filteredArray = currentWatchList.filter(
      (watchList: any) => watchList.id !== id
    )
    localStorage.setItem("watchList", JSON.stringify(filteredArray))
    setWatchlist(false)
  }

  return (
    <>
      {inWatchList ? (
        <Button variant="outline" onClick={() => removeFromWatchList(id)}>
          Remove from watch list
        </Button>
      ) : (
        <Button onClick={() => addToWatchList(id, name, poster_path)}>
          Add to watch list
        </Button>
      )}
    </>
  )
}

export default WatchList
