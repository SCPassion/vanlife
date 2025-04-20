import { useOutletContext } from "react-router"

export default function HostVanDetails() {
  const { van } = useOutletContext()
  return (
    van && (
      <section className="space-y-3.75 text-sm font-medium text-[#161616]">
        <p>
          <span className="font-bold">Name: </span>
          {van.name}
        </p>
        <p>
          <span className="font-bold">Category: </span>
          {van.type.at(0).toUpperCase() + van.type.slice(1)}
        </p>
        <p>
          <span className="font-bold">Description: </span>
          {van.description}
        </p>
        <p>
          <span className="font-bold">Visibility: </span>
          Public
        </p>
      </section>
    )
  )
}
