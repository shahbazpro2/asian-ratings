"use client"

// Error components must be Client Components
import { useEffect } from "react"

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h2>Something went wrong!</h2>
    </section>
  )
}
