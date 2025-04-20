import { useOutletContext } from "react-router"

export default function HostVanPricing() {
  const { van } = useOutletContext()

  return (
    van && (
      <p className="text-base font-medium text-[#4D4D4D]">
        <span className="text-2xl text-[#161616]">
          ${Number(van.price).toFixed(2)}
        </span>
        /day
      </p>
    )
  )
}
