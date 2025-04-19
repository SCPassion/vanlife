import { FaStar } from "react-icons/fa"

export default function () {
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
    </section>
  )
}
