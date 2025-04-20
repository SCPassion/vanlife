import { Si1Panel } from "react-icons/si"
import { FaStar } from "react-icons/fa"

export default function Reviews() {
  return (
    <section className="px-6.25 pb-16 text-[#4D4D4D]">
      <p className="mb-8">
        <span className="text-3xl font-bold text-[#161616]">Your reviews</span>{" "}
        last <span className="font-bold underline">30 days</span>
      </p>

      <div className="mb-6.25 flex items-center">
        <p className="text-3xl font-bold text-[#161616]">5.0</p>
        <FaStar className="mr-2 fill-[#FF8C38]" size={30} />
        <p className="text-base font-medium">overall rating</p>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex gap-8">
          <p className="text-base font-medium text-[#4D4D4D]">5 stars</p>
          <div className="my-auto h-2 grow rounded-full bg-[#FF8C38]"></div>
          <p className="text-base font-medium text-[#4D4D4D]">100%</p>
        </div>
        <div className="flex gap-8">
          <p className="text-base font-medium text-[#4D4D4D]">4 stars</p>
          <div className="my-auto h-2 grow rounded-full bg-[#B9B9B9]"></div>
          <p className="text-base font-medium text-[#4D4D4D]">0%</p>
        </div>
        <div className="flex gap-8">
          <p className="text-base font-medium text-[#4D4D4D]">3 stars</p>
          <div className="my-auto h-2 grow rounded-full bg-[#B9B9B9]"></div>
          <p className="text-base font-medium text-[#4D4D4D]">0%</p>
        </div>
        <div className="flex gap-8">
          <p className="text-base font-medium text-[#4D4D4D]">2 stars</p>
          <div className="my-auto h-2 grow rounded-full bg-[#B9B9B9]"></div>
          <p className="text-base font-medium text-[#4D4D4D]">0%</p>
        </div>
        <div className="flex gap-8">
          <p className="text-base font-medium text-[#4D4D4D]">1 stars</p>
          <div className="my-auto h-2 grow rounded-full bg-[#B9B9B9]"></div>
          <p className="text-base font-medium text-[#4D4D4D]">0%</p>
        </div>
      </div>

      <p className="mt-5 text-xl font-bold">Reviews (2)</p>

      <div className="flex flex-col gap-2 border-b border-[#C7C7C7] py-6.25">
        <div className="flex">
          <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
          <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
          <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
          <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
          <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
        </div>

        <p className="text-[#8C8C8C]">
          <span className="font-semibold text-[#161616]">Elliot</span> December
          1, 2022
        </p>
        <p className="text-[#161616]">
          The beach bum is such as awesome van! Such as comfortable trip. We had
          it for 2 weeks and there was not a single issue. Super clean when we
          picked it up and the host is very comfortable and understanding.
          Highly recommend!
        </p>
      </div>
    </section>
  )
}
