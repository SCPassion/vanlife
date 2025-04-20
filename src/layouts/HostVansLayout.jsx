import { useState, useEffect } from "react"
import { NavLink, Link, Outlet, useParams } from "react-router"
import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowsRotate } from "react-icons/fa6"

import { getVan } from "../api"
import VanStatus from "../components/VanStatus"
export default function HostVansLayout() {
  const { id } = useParams()
  const [van, setVan] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchVan() {
      try {
        const van = await getVan(id)
        setVan(van)
      } catch (error) {
        setError(error.message)
        console.error("Error fetching van data:", error)
      }
    }
    fetchVan()
  }, [])
  return (
    <div className="mx-6.5">
      <Link
        to=".."
        relative="path"
        className="mb-9.25 flex items-center gap-1 text-base font-medium text-[#201F1D] underline"
      >
        <FaRegArrowAltCircleLeft size={16} />
        Back to all vans
      </Link>
      {van ? (
        <div className="mb-11.25 rounded-md bg-white px-6.25 pt-5.75 shadow-md">
          <div className="mb-6.5 flex gap-5">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="size-40 rounded-md"
            />
            <div className="flex flex-col justify-center gap-3 text-[#161616]">
              <VanStatus type={van.type} />
              <h1 className="text-3xl font-bold">{van.name}</h1>
              <p className="text-xl font-medium">
                <span className="font-bold">${van.price}</span>/day
              </p>
            </div>
          </div>

          <nav className="mb-7 space-x-6.75 text-base text-[#4D4D4D]">
            <NavLink
              to="."
              className={({ isActive }) =>
                isActive ? "font-bold text-[#161616] underline" : ""
              }
              end
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#161616] underline" : ""
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive ? "font-bold text-[#161616] underline" : ""
              }
            >
              Photos
            </NavLink>
          </nav>

          <Outlet />
        </div>
      ) : (
        <FaArrowsRotate
          className="mx-auto my-20 animate-spin hover:underline"
          size={40}
        />
      )}
    </div>
  )
}
