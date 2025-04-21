import chartData from "../../chartData"
import Chart from "../../components/Chart"
import Transaction from "../../components/Transaction"
export default function Income() {
  return (
    <section className="px-6.5 text-[#161616]">
      <h1 className="mb-11 text-4xl font-bold">Income</h1>
      <p className="mb-7.5 font-medium text-[#4D4D4D]">
        Last <span className="font-semibold underline">30 days</span>
      </p>
      <p className="mb-14.25 text-5xl font-extrabold">$2,260</p>

      <Chart chartData={chartData} variable="income" />

      <div className="mt-16 flex flex-col gap-7.75">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#161616]">
            Your transactions (3)
          </h3>
          <p className="text-base font-medium text-[#4D4D4D]">
            Last <span className="text-[#161616] underline">30 days</span>
          </p>
        </div>
        <Transaction revenue={720} date="1/12/22" />
        <Transaction revenue={560} date="10/11/22" />
        <Transaction revenue={980} date="23/11/22" />
      </div>
    </section>
  )
}
