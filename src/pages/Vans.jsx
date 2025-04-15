import { NavLink, useLocation } from "react-router"
import { useState, useEffect } from "react"
import { getAllVans } from "../api"

import clsx from "clsx"
//  {
// hostId: "123",
// price: 60,
// imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
// description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
// type: "simple",
// name: "Modest Explorer", id: "1" }

export default function Vans() {
  const [vans, setVans] = useState([])
  const [isPending, setIsPending] = useState(false)
  useEffect(() => {
    async function fetch() {
      setIsPending(true)
      const vansData = await getAllVans()
      setVans(vansData)
      setIsPending(false)
    }

    fetch()
  }, [])

  console.log(isPending)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const type = searchParams?.get("type") || ""

  const normalClassName =
    "rounded-sm bg-[#FFEAD0] px-7 py-1.5 font-medium text-[#4D4D4D]"

  const selectClassName = clsx(normalClassName, "bg-black text-white")

  const typeBackgroundColor = {
    simple: "bg-[#E17654]",
    luxury: "bg-[#115E59]",
    rugged: "bg-[#161616]",
  }

  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <img
        src={van.imageUrl}
        alt={van.name}
        className="mb-2.5 size-57 rounded-md"
      />
      <div className="flex justify-between">
        <p>{van.name}</p>
        <p>
          ${van.price} <br />
          /day
        </p>
      </div>
      <div
        className={`${typeBackgroundColor[van.type]} -mt-5 flex h-9 w-21 items-center justify-center rounded-md text-base font-semibold text-[#FFEAD0]`}
      >
        {van.type}
      </div>
    </div>
  ))

  return (
    <section className="px-7 py-14">
      <h1 className="text-4xl font-bold">Explore our van options</h1>
      <nav className="flex items-center justify-between">
        <NavLink
          to="?type=simple"
          className={type === "simple" ? selectClassName : normalClassName}
        >
          Simple
        </NavLink>
        <NavLink
          to="?type=luxury"
          className={type === "luxury" ? selectClassName : normalClassName}
        >
          Luxury
        </NavLink>
        <NavLink
          to="?type=rugged"
          className={type === "rugged" ? selectClassName : normalClassName}
        >
          Rugged
        </NavLink>
        <NavLink to="." className="underline">
          Clear filters
        </NavLink>
      </nav>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8.5">
          {vanElements}
        </div>
      )}
    </section>
  )
}
