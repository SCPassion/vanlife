import { NavLink, Outlet } from "react-router"

export default function HostLayout() {
  const activeClass = "underline font-bold text-[#161616]"
  return (
    <div>
      <nav className="mb-11.25 flex gap-7.25 px-6.5 text-lg font-medium text-[#4D4D4D]">
        <NavLink
          to="."
          relative="path"
          className={({ isActive }) => (isActive ? activeClass : "")}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          relative="path"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          relative="path"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          relative="path"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
