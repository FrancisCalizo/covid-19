import React, { useContext, useEffect, useState } from "react"
import { Line } from "react-chartjs-2"

import CovidContext from "../context/covidContext"

const Chart = () => {
  const covidContext = useContext(CovidContext)
  const { currentCountry, countryData } = covidContext

  const [dates, setDates] = useState([])
  const [confirmed, setConfirmed] = useState([])
  const [deaths, setDeaths] = useState([])
  const [recovered, setRecovered] = useState([])

  useEffect(() => {
    if (countryData[currentCountry]) {
      setDates(countryData[currentCountry].map(data => data.date))
      setConfirmed(countryData[currentCountry].map(data => data.confirmed))
      setDeaths(countryData[currentCountry].map(data => data.deaths))
      setRecovered(countryData[currentCountry].map(data => data.recovered))
    }
  }, [countryData, currentCountry])

  return (
    <div className="lg:w-3/4 xl:w-2/3 mx-auto">
      <Line
        data={{
          labels: dates,
          datasets: [
            {
              label: "Confirmed Cases",
              data: confirmed,
              backgroundColor: "transparent",
              borderColor: "#63b3ed",
            },
            {
              label: "Deaths",
              data: deaths,
              backgroundColor: "transparent",
              borderColor: "#fc8181",
            },
            {
              label: "Recovered",
              data: recovered,
              backgroundColor: "transparent",
              borderColor: "#68d391",
            },
          ],
        }}
        height={500}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default Chart
