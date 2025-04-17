import Button from "../components/Button"

export default function Login() {
  function formAction(formData) {
    const data = Object.fromEntries(formData)
  }

  return (
    <div className="mt-13 mb-18 px-7">
      <h1 className="mb-12 text-center text-4xl font-bold">
        Sign in to your account
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
          Sign in
        </Button>
      </form>

      <p className="mt-12 text-center text-base font-medium">
        Don’t have an account?{" "}
        <span className="font-bold text-[#FF8C38]">Create one now</span>
      </p>
    </div>
  )
}
