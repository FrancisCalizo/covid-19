import React, { useState, useEffect, useContext } from "react"
import { Line } from "react-chartjs-2"

import CovidContext from "../context/covidContext"

const Chart = () => {
  const covidContext = useContext(CovidContext)
  const { currentCountry, countryData } = covidContext

  const [cases, setCases] = useState([])
  const [dates, setDates] = useState([])

  useEffect(() => {
    // if (Object.keys(countryData).length) {
    if (countryData[currentCountry] !== undefined) {
      setDates(countryData[currentCountry].map(data => data.date))
      console.log(countryData[currentCountry])
    }
  }, [])

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Population",
        data: cases,
        // backgroundColor: "#4a5568",
        borderColor: "#f00",
        label: "This is a label",
        pointBackgroundColor: "green",
      },
    ],
  }

  console.log(countryData[currentCountry])

  return (
    <div>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default Chart
