import { Outlet } from "react-router"
import { NavLink } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Layout() {
  return (
    <div className="mx-auto max-w-xl border-2 bg-[#FFF7ED]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
