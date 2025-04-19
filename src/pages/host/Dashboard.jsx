import { FaStar } from "react-icons/fa"
import { useOutletContext, Link } from "react-router"
import { FaArrowsRotate } from "react-icons/fa6"

export default function () {
  const { vans } = useOutletContext()
  const vansElements = vans.map((van) => (
    <div className="flex items-center gap-4.25 rounded-md bg-[#FFFFFF] px-6 py-4.5 text-base">
      <img src={van.imageUrl} alt={van.name} className="size-16.5 rounded-md" />
      <div>
        <h2 className="mb-1 text-xl font-semibold">{van.name}</h2>
        <p>${van.price}/day</p>
      </div>
      <p className="ml-auto">Edit</p>
    </div>
  ))

  return (
    <section className="text-[#4D4D4D]">
      <div className="flex flex-col gap-8 bg-[#FFEAD0] px-6.5 py-9.25">
        <h1 className="text-4xl font-bold text-[#161616]">Welcome!</h1>
        <div className="flex justify-between text-base font-medium">
          <p>
            Income last <span className="font-bold underline">30 days</span>
          </p>
          <p>Details</p>
        </div>
        <p className="text-5xl font-extrabold text-[#161616]">$2,260</p>
      </div>

      <div className="flex items-center justify-between bg-[#FFDDB2] px-6.5 py-11.25">
        <div className="flex items-center text-2xl">
          <p className="mr-3 font-bold text-[#161616]">Review score</p>
          <FaStar className="mr-2 fill-[#FF8C38]" />
          <p>
            <span className="font-bold text-[#161616]">5.0</span>/5
          </p>
        </div>
        <p className="text-base text-[#161616]">Details</p>
      </div>

      <div className="bg-[#FFF7ED] px-6.5 py-9.5 text-2xl">
        <div className="flex items-baseline justify-between">
          <p className="mr-3 mb-7.5 font-bold text-[#161616]">
            Your listed vans
          </p>
          <Link
            to="vans"
            className="rounded-full bg-amber-100 px-4 py-2.5 text-base font-semibold text-[#161616] transition-all hover:scale-110 hover:bg-amber-200 hover:underline"
          >
            View all
          </Link>
        </div>
        {vans.length === 0 ? (
          <FaArrowsRotate
            className="mx-auto animate-spin hover:underline"
            size={40}
          />
        ) : (
          <div className="space-y-4">{vansElements}</div>
        )}
      </div>
    </section>
  )
}
