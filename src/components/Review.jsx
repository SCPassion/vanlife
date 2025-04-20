import { FaStar } from "react-icons/fa"

export default function Review({ name, date, children }) {
  return (
    <div className="flex flex-col gap-2 border-b border-[#C7C7C7] py-6.25">
      <div className="flex">
        <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
        <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
        <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
        <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
        <FaStar className="mr-2 fill-[#FF8C38]" size={20} />
      </div>

      <p className="text-[#8C8C8C]">
        <span className="font-semibold text-[#161616]">{name}</span> {date}
      </p>
      <p className="text-[#161616]">{children}</p>
    </div>
  )
}
