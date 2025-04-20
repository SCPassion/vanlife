import chartData from "../../chartData"
import Chart from "../../components/Chart"

export default function Income() {
  return (
    <section className="px-6.5 text-[#161616]">
      <h1 className="mb-11 text-4xl font-bold">Income</h1>
      <p className="mb-7.5 font-medium text-[#4D4D4D]">
        Last <span className="font-semibold underline">30 days</span>
      </p>
      <p className="mb-14.25 text-5xl font-extrabold">$2,260</p>

      <Chart chartData={chartData} variable="income" />

      <div className="flex">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
    </section>
  )
}
