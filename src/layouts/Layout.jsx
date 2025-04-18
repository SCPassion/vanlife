import { Outlet } from "react-router"
import { NavLink } from "react-router"
import { useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
  // User here used for authentication, this is set by the login page
  const [user, setUser] = useState(null)

  return (
    <div className="mx-auto max-w-xl border-2 bg-[#FFF7ED]">
      <Header />
      <Outlet context={{ user, setUser }} />
      <Footer />
    </div>
  )
}
