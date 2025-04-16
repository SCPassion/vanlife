import { useParams, useLocation, Link } from "react-router"
import { useState, useEffect } from "react"
import { getVan } from "../api"
import { BsArrow90DegLeft } from "react-icons/bs"
import VanStatus from "../components/VanStatus"
import Button from "../components/Button"
export default function VanDetail() {
  const [van, setVan] = useState(null)
  const { id } = useParams()
  const location = useLocation()
  const pathTo = location.state?.search || ""

  useEffect(() => {
    async function fetchVan() {
      const vanDetail = await getVan(id)
      setVan(vanDetail)
    }

    fetchVan()
  }, [])

  return (
    <div className="px-6">
      <Link
        to={`..${pathTo}`}
        relative="path"
        className="text-l2 flex items-center gap-2 underline"
      >
        <BsArrow90DegLeft className="size-5" />
        <p className="text-lg font-medium">Back to all vans</p>
      </Link>
      {van !== null ? (
        <section className="mb-21 text-[#161616]">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="mt-6 mb-13 w-full"
          />
          <VanStatus type={van.type} />
          <h1 className="mt-6 mb-2.5 text-4xl font-bold">{van.name}</h1>
          <p className="mb-2.5 text-xl font-medium">
            <span className="text-2xl font-bold">${van.price}</span>/day
          </p>
          <p className="mb-5.5 text-base leading-6 font-medium">
            {van.description}
          </p>
          <div className="text-white">
            <Button backgroundColor="orange">Rent this van</Button>
          </div>
        </section>
      ) : (
        <p className="text-2xl font-bold">Loading...</p>
      )}
    </div>
  )
}
