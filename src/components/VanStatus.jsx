export default function VanStatus({ type = "simple", margin = "default" }) {
  const typeBackgroundColor = {
    simple: "bg-[#E17654]",
    luxury: "bg-[#115E59]",
    rugged: "bg-[#161616]",
  }
  const marginClass = {
    negative: "-mt-5",
    positive: "mt-5",
    default: "mt-0",
  }

  return (
    <div
      className={`${typeBackgroundColor[type]} ${marginClass[margin]} flex h-9 w-21 items-center justify-center rounded-md text-base font-semibold text-[#FFEAD0]`}
    >
      {type}
    </div>
  )
}
