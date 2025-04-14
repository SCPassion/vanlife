import { BrowserRouter, Routes, Route, NavLink } from "react-router"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="about" element={<h1>About</h1>} />
            <Route path="vans" element={<h1>Vans</h1>} />
            <Route path="vans/:id" element={<h1>Van Details</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
