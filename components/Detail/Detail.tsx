"use client"

import Image from "next/image"

const styles = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const Details = ({ movie }: any = {}) => {
  const backdropImagePath = `linear-gradient(90deg, rgba(0,0,0,0.7609637605042017) 100%, rgba(224,224,224,1) 100%),url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`
  return (
    <section
      className="container grid items-center gap-6 bg-auto bg-center bg-no-repeat pb-8 pt-6 md:py-10"
      style={{ background: backdropImagePath, ...styles }}
    >
      <div className="flex max-w-[1200px] ">
        <div>
          <Image
            className="w-50"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={100}
          />
        </div>
        <div className="pl-4 text-white">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            {movie.title}
          </h1>
          <div>
            <span>{movie.release_date}</span>
          </div>

          <p className="text-lg">
            <span className="block font-semibold">Overview</span>
            {movie.overview}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Details
