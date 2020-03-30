import React, { useState } from "react"
import { Line } from "react-chartjs-2"

const Chart = () => {
  const [data] = useState({
    labels: ["March 1", "March 3", "March 5", "March 7", "March 8"],
    datasets: [
      {
        label: "Population",
        data: [1000, 1200, 1649, 2123, 1789],
        // backgroundColor: "#4a5568",
        borderColor: "#f00",
        label: "This is a label",
        pointBackgroundColor: "green",
      },
    ],
  })

  return (
    <div>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default Chart
