import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  Cell,
} from "recharts"

export default function Chart({ chartData, variable }) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer>
        <BarChart width={150} height={40} data={chartData}>
          <YAxis tick={{ fontSize: 20 }} />
          <XAxis dataKey="name" tick={{ fontSize: 20 }} />
          <Bar dataKey={variable} fill="#4D4D4D" radius={[6, 5, 0, 0]}>
            {chartData.map((entry, index) => (
              // Render a different color for the first 4 bars
              // and a different color for the rest
              // You can customize the colors as per your requirement
              // Here, we are using a simple condition to check the index
              <Cell
                key={`cell-${index}`}
                fill={index < 4 ? "#FFEAD0" : "#FF8C38"}
              />
            ))}
          </Bar>
          // Render the grid lines
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
