import { NavLink } from "react-router"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-9">
      <NavLink to="/" className="text-2xl font-black text-black">
        #VANLIFE
      </NavLink>
      <nav className="flex items-center space-x-3 text-base font-semibold text-[#4D4D4D]">
        <NavLink to="about">About</NavLink>
        <NavLink to="vans">Vans</NavLink>
      </nav>
    </header>
  )
}
