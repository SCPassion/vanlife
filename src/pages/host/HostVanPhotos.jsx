import { useOutletContext } from "react-router"

export default function HostVanPhotos() {
  const { van } = useOutletContext()
  return (
    van && (
      <img src={van.imageUrl} alt={van.name} className="size-26 rounded-md" />
    )
  )
}
