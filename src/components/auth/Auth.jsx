import { Outlet, useOutletContext, Navigate } from "react-router"

export default function Auth() {
  const { user } = useOutletContext()

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ message: "Please login first!" }}
        replace
      />
    )
  }

  return <Outlet />
}
