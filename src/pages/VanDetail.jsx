import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { getVan } from "../api"

export default function VanDetail() {
  const [van, setVan] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    async function fetchVan() {
      const vanDetail = await getVan(id)
      setVan(vanDetail)
    }

    fetchVan()
  }, [])

  console.log(van)
  return <h1>vanDetail</h1>
}
