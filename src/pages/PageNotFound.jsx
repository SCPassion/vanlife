import Button from "../components/Button"
import { useNavigate } from "react-router"
export default function PageNotFound() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/")
  }
  return (
    <div className="mx-4 my-12">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Sorry, the page you were looking for was not found.
      </h1>

      <Button backgroundColor="black" type="button" onClick={handleClick}>
        Return to home
      </Button>
    </div>
  )
}
