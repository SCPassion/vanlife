import Button from "../components/Button"
import { signUp, signIn } from "../api"
import { useState } from "react"

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false)

  function enableSignUp() {
    setIsSignUp(true)
  }
  async function formAction(formData) {
    const { email, password } = Object.fromEntries(formData)
    const username = email.split("@")[0]

    try {
      if (isSignUp) {
        const userId = await signUp({ username, email, password })
        console.log("User created with ID:", userId)
      } else {
        const user = await signIn({ email, password })
        console.log("user signed in: ", user)
      }
    } catch (error) {
      console.error("Error:", error)
      alert(error.message)
    }
  }

  return (
    <div className="mt-13 mb-18 px-7">
      <h1 className="mb-12 text-center text-4xl font-bold">
        {isSignUp ? "Sign up now!" : "Sign in to your account"}
      </h1>

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
          onClick={enableSignUp}
          className="cursor-pointer font-bold text-[#FF8C38] shadow-md transition-transform hover:text-black hover:underline"
        >
          Click here to one now
        </span>
      </p>
    </div>
  )
}
