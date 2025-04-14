export default function Dashboard() {
  return (
    <div className="bg-gray-400 bg-[url('/dashboard-img.png')] bg-cover bg-no-repeat px-6 py-16 text-white bg-blend-multiply">
      <h1 className="mb-6 text-4xl font-extrabold">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="mb-14 text-base leading-6 font-medium">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="w-full cursor-pointer rounded-md bg-[#FF8C38] py-[11px] text-base font-bold transition-all duration-200 focus:scale-105 focus:bg-[#FF8C38]/80">
        Find your van
      </button>
    </div>
  )
}
