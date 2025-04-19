import Button from "../components/Button"
import { useNavigate } from "react-router"

export default function Home() {
  const navigate = useNavigate()

  function goToHost() {
    navigate("/host", { replace: true })
  }

  return (
    <div className="bg-gray-400 bg-[url('/dashboard-img.png')] bg-cover bg-no-repeat px-6 py-16 text-white bg-blend-multiply">
      <h1 className="mb-6 text-4xl font-extrabold">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mb-14 text-base leading-6 font-medium">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Button backgroundColor="orange" onClick={goToHost}>
        Find your van
      </Button>
    </div>
  )
}
