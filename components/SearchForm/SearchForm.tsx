"use client"

import { SetStateAction, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchForm = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Search Movies or TV shows"
        onChange={handleChange}
      />
      <Button
        type="submit"
        onClick={() => {
          router.push(`/search/${searchTerm}`)
        }}
      >
        Search
      </Button>
    </div>
  )
}

export default SearchForm
