import { NavLink, useLocation } from "react-router"
export default function Header() {
  const location = useLocation()
  return (
    <header className="flex items-center justify-between px-6 py-9">
      <NavLink to="/" className="text-2xl font-black text-black">
        #VANLIFE
      </NavLink>
      <nav className="flex items-center space-x-3 text-base font-semibold text-[#4D4D4D]">
        <NavLink
          to="about"
          className={location.pathname.includes("/about") ? "underline" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={location.pathname.includes("/vans") ? "underline" : ""}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  )
}
