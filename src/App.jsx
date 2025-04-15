import { BrowserRouter, Routes, Route, NavLink } from "react-router"
import Layout from "./layouts/Layout"
import Dashboard from "./pages/Dashboard"
import About from "./pages/About"
import Vans from "./pages/Vans"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<h1>Van Details</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
