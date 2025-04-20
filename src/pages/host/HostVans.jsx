import { Link, useOutletContext } from "react-router"

export default function HostVans() {
  const { vans } = useOutletContext()

  const vansElements = vans.map((van) => (
    <Link to={van.id} key={van.id}>
      <div className="mb-4 flex items-center gap-4.25 rounded-md bg-[#FFFFFF] px-6 py-4.5 text-base transition-all duration-350 hover:scale-105 hover:shadow-xl">
        <img
          src={van.imageUrl}
          alt={van.name}
          className="size-16.5 rounded-md"
        />
        <div>
          <h2 className="mb-1 text-xl font-semibold">{van.name}</h2>
          <p>${van.price}/day</p>
        </div>
        <p className="ml-auto">Edit</p>
      </div>
    </Link>
  ))

  return (
    <div className="mx-6">
      <p className="mr-3 mb-7.5 text-4xl font-bold text-[#161616]">
        Your listed vans
      </p>
      {vansElements}
    </div>
  )
}
