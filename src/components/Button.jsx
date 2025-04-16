import clsx from "clsx"

export default function Button({
  children,
  onClick,
  backgroundColor,
  ...rest
}) {
  const classNames = clsx(
    "w-full cursor-pointer rounded-md py-[11px] text-base font-bold transition-all duration-200",
    {
      "bg-[#FF8C38]": backgroundColor === "orange",
      "bg-[#161616]": backgroundColor === "black",
    },
  )
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  )
}
