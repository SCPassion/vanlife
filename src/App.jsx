import { BrowserRouter, Routes, Route, NavLink } from "react-router"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Login from "./pages/Login"
import Auth from "./auth/Auth"
import HostLayout from "./layouts/HostLayout"
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
                <Route index element={<h1>Host Dashboard</h1>} />
                <Route path="income" element={<h1>Host Income</h1>} />
                <Route path="vans" element={<h1>Host Vans</h1>} />
                <Route path="reviews" element={<h1>Host Reviews</h1>} />
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
