import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Cell,
} from "recharts"

import chartData from "../../chartData"

export default function Income() {
  return (
    <section className="px-6.5 text-[#161616]">
      <h1 className="mb-11 text-4xl font-bold">Income</h1>
      <p className="mb-7.5 font-medium text-[#4D4D4D]">
        Last <span className="font-semibold underline">30 days</span>
      </p>
      <p className="mb-14.25 text-5xl font-extrabold">$2,260</p>

      <div className="h-[300px] w-full">
        <ResponsiveContainer>
          <BarChart width={150} height={40} data={chartData}>
            <YAxis tick={{ fontSize: 20 }} />
            <XAxis dataKey="name" tick={{ fontSize: 20 }} />
            <Bar dataKey="income" fill="#4D4D4D" radius={[6, 5, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index < 4 ? "#FFEAD0" : "#FF8C38"}
                />
              ))}
            </Bar>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex">
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
    </section>
  )
}
