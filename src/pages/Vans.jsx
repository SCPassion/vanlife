import { NavLink, useLocation } from "react-router"
import { useState, useEffect } from "react"

import clsx from "clsx"
export default function Vans() {
  const [vans, setVans] = useState([])

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const type = searchParams?.get("type") || ""

  const normalClassName =
    "rounded-sm bg-[#FFEAD0] px-7 py-1.5 font-medium text-[#4D4D4D]"

  const selectClassName = clsx(normalClassName, "bg-black text-white")

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
    </section>
  )
}
