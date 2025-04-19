import { Outlet } from "react-router"
import { NavLink } from "react-router"
import { useState, useEffect } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout() {
  // User here used for authentication, this is set by the login page
  const [user, setUser] = useState(null)

  // This effect runs once when the component mounts and checks if there is a user in local storage
  useEffect(() => {
    const localUser = localStorage.getItem("user")
    if (localUser) {
      setUser(JSON.parse(localUser))
    }
  }, []) // Do not put user as a dependency because the output from localStorage.getItem will generate a new object every time
  // Causing an infinite loop

  return (
    <div className="mx-auto max-w-xl border-2 bg-[#FFF7ED]">
      <Header />
      <Outlet context={{ user, setUser }} />
      <Footer />
    </div>
  )
}
