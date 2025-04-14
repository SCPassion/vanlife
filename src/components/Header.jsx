import { NavLink } from "react-router"

export default function Header() {
  return (
    <header className="my-9 flex items-center justify-between">
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
