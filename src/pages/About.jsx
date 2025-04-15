import { Link } from "react-router"

export default function About() {
  return (
    <section>
      <img
        src="/carbg.png"
        alt="car"
        className="max-h-60 w-full object-cover"
      />

      <div className="px-6 py-12">
        <h1 className="text-3xl leading-9 font-medium">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>

        <p className="pt-8 pb-5 text-base leading-5 font-medium">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
        </p>

        <p className="pb-14 text-base leading-5 font-medium">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="rounded-md bg-[#FFCC8D] px-9 py-8">
          <h2 className="mb-6 text-2xl font-bold text-[#161616]">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link
            to="../vans"
            route="path"
            className="inline-block cursor-pointer rounded-[10px] bg-[#161616] px-6 py-3 text-base font-bold text-white"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  )
}
