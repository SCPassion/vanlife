import clsx from "clsx"
import { useFormStatus } from "react-dom"
export default function Button({
  children,
  onClick,
  backgroundColor,
  type = "button",
  textColor = "white",
}) {
  const { pending } = useFormStatus()
  const isDisabled = pending

  const classNames = clsx(
    "w-full cursor-pointer rounded-md py-[11px] text-base font-bold transition-all duration-200",
    {
      "bg-[#FF8C38]": backgroundColor === "orange",
      "bg-[#161616]": backgroundColor === "black",
    },
  )

  const textClass = clsx({
    "text-white": textColor === "white",
    "text-black": textColor === "black",
  })
  return (
    <button
      onClick={onClick}
      className={`${classNames} ${textClass} disabled:cursor-not-allowed disabled:bg-gray-500`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}
