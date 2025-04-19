import { Outlet, useOutletContext, Navigate, useLocation } from "react-router"

export default function Auth() {
  const { user } = useOutletContext()
  const location = useLocation()

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ pathname: location.pathname, message: "Please login first!" }}
        replace
      />
    )
  }

  return <Outlet />
}
