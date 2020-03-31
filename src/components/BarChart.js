import React, { useContext, useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"

import CovidContext from "../context/covidContext"

const BarChart = () => {
  const covidContext = useContext(CovidContext)
  const { countryDataToday, currentCountry } = covidContext

  const [date, setDate] = useState(null)
  const [confirmed, setConfirmed] = useState(null)
  const [deaths, setDeaths] = useState(null)
  const [recovered, setRecovered] = useState(null)

  useEffect(() => {
    setDate(countryDataToday.date)
    setConfirmed(countryDataToday.confirmed)
    setDeaths(countryDataToday.deaths)
    setRecovered(countryDataToday.recovered)
  }, [countryDataToday, currentCountry])

  return (
    <div className="h-64">
      <Bar
        data={{
          labels: ["Confirmed", "Deaths", "Recovered"],
          datasets: [
            {
              label: "Confirmed",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [confirmed, deaths, recovered],
            },
          ],
        }}
        height={60}
        width={30}
        options={{
          // aspectRatio: 4,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 0,
              bottom: 30,
              left: 30,
              right: 30,
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
