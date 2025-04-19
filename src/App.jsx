import { BrowserRouter, Routes, Route, NavLink } from "react-router"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Login from "./pages/Login"
import Auth from "./auth/Auth"
import HostLayout from "./layouts/HostLayout"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans from "./pages/host/HostVans"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="login" element={<Login />} />

            <Route element={<Auth />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
