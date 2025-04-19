import Button from "../components/Button"
import { signUp, signIn } from "../api"
import { useState, useEffect } from "react"
import { TbDog } from "react-icons/tb"

import { useNavigate, useOutletContext, useLocation } from "react-router"

export default function Login() {
  const { user, setUser } = useOutletContext()
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const message = location.state?.message || null

  useEffect(() => {
    if (message) {
      setError(message)
    } else {
      setError(null)
    }
  }, [])

  function signOut() {
    setUser(null)
    localStorage.removeItem("user") // Remove user from local storage
    alert("You have been signed out!")
  }

  function toggleSignUp() {
    setIsSignUp((prev) => !prev)
  }

  async function formAction(formData) {
    const { email, password } = Object.fromEntries(formData)
    const username = email.split("@")[0]

    try {
      if (isSignUp) {
        const user = await signUp({ username, email, password })
        //console.log("User created with ID:", user)
        alert("Congrats! You have created an account.")

        toggleSignUp()
        setError(null)
      } else {
        const user = await signIn({ email, password })
        //console.log("user signed in: ", user)
        setError(null)
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user)) // Store user in local storage
        navigate("/host", { replace: true })
      }
    } catch (error) {
      console.error("Error:", error)
      setError(error.message)
    }
  }

  if (user) {
    return (
      <div className="mb-12 px-7">
        <h1 className="mb-12 text-center text-4xl font-bold">
          You are already logged in
        </h1>
        <TbDog size={250} className="mx-auto mb-12" />
        <Button backgroundColor="orange" type="button" onClick={signOut}>
          Sign out now!
        </Button>
      </div>
    )
  }

  return (
    <div className="mt-13 mb-18 px-7">
      <h1 className="mb-12 text-center text-4xl font-bold">
        {isSignUp ? "Sign up now!" : "Sign in to your account"}
      </h1>
      {error && (
        <h1 className="mb-4 text-center text-lg font-medium text-red-600">
          {error}
        </h1>
      )}

      <form action={formAction} className="-center flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          alt="Email Address Input"
          className="rounded-t-md border border-[#D1D5DB] bg-white px-3 py-2.5"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          alt="Password Input"
          className="round-tl- mb-5.5 rounded-b-md border border-[#D1D5DB] bg-white px-3 py-2.5"
          required
        />

        <Button backgroundColor="orange" type="submit">
          {isSignUp ? "Sign Up" : "Sign in"}
        </Button>
      </form>

      <p className="mt-12 text-center text-base font-medium">
        Don’t have an account?{" "}
        <span
          onClick={toggleSignUp}
          className="cursor-pointer font-bold text-[#FF8C38] shadow-md transition-transform hover:text-black hover:underline"
        >
          {!isSignUp ? "Click here to one now" : "Back to sign in"}
        </span>
      </p>
    </div>
  )
}
