import { FaStar } from "react-icons/fa"

export default function Review({ name, date, children, rating = 5 }) {
  const starElements = new Array(rating)
    .fill(1)
    .map((value, index) => (
      <FaStar key={index} className="mr-2 fill-[#FF8C38]" size={20} />
    ))

  return (
    <div className="flex flex-col gap-2 border-b border-[#C7C7C7] py-6.25">
      <div className="flex">{starElements}</div>

      <p className="text-[#8C8C8C]">
        <span className="font-semibold text-[#161616]">{name}</span> {date}
      </p>
      <p className="text-[#161616]">{children}</p>
    </div>
  )
}
