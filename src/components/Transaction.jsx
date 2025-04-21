export default function Transaction({ revenue, date }) {
  console.log(revenue)
  return (
    <div className="flex items-center justify-between rounded-md bg-white px-7.25 py-8.75 last:mb-15.5">
      <p className="text-4xl font-semibold text-[#161616]">${revenue}</p>
      <p className="text-xl font-medium text-[#4D4D4D]">{date}</p>
    </div>
  )
}
