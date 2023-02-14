import Image from "next/image"
import Link from "next/link"

export default function Movie({ id, title, posterPath, releaseDate }) {
  const posterUrl = "https://image.tmdb.org/t/p/original"
  return (
    <div>
      <h1>{title}</h1>
      <h2>{releaseDate}</h2>

      <Link href={`${id}`}>
        <Image
          src={posterUrl + posterPath}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  )
}
