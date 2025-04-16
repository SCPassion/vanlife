import { useParams, useLocation, Link } from "react-router"
import { useState, useEffect } from "react"
import { getVan } from "../api"
import { BsArrow90DegLeft } from "react-icons/bs"

export default function VanDetail() {
  const [van, setVan] = useState(null)
  const [isPending, setIsPending] = useState(false)
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
    <div>
      <Link
        to={`..${pathTo}`}
        relative="path"
        className="text-l2 flex items-center gap-2 underline"
      >
        <BsArrow90DegLeft className="size-5" />
        <p className="text-lg font-medium">Back to all vans</p>
      </Link>
    </div>
  )
}
