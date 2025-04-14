import { Outlet } from "react-router"
import { NavLink } from "react-router"

export default function Layout() {
  return (
    <div className="mx-auto max-w-xl border-2 border-black bg-[#FFF7ED] px-6">
      <header className="flex justify-between">
        <NavLink to="/" className="f">
          #VANLIFE
        </NavLink>
        <nav>
          <NavLink to="about">About</NavLink>
          <NavLink to="vans">Vans</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
