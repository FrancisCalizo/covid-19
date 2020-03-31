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
  const [isLogarithmic, setIsLogarithmic] = useState(true)

  useEffect(() => {
    if (countryData[currentCountry]) {
      setDates(countryData[currentCountry].map(data => data.date))
      setConfirmed(countryData[currentCountry].map(data => data.confirmed))
      setDeaths(countryData[currentCountry].map(data => data.deaths))
      setRecovered(countryData[currentCountry].map(data => data.recovered))
    }
  }, [countryData, currentCountry])

  return (
    <div className="lg:w-3/4 xl:w-2/3 mx-auto bg-gray-700 rounded">
      <Line
        className="text-white"
        data={{
          labels: dates,
          datasets: [
            {
              label: "Confirmed Cases",
              data: confirmed,
              backgroundColor: "transparent",
              borderColor: "#63b3ed",
              lineTension: 0.1,
              fill: false,
              pointBorderColor: "#63b3ed",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#63b3ed",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
            {
              label: "Deaths",
              data: deaths,
              backgroundColor: "transparent",
              borderColor: "#fc8181",
              lineTension: 0.1,
              fill: false,
              pointBorderColor: "#fc8181",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#fc8181",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
            {
              label: "Recovered",
              data: recovered,
              backgroundColor: "transparent",
              borderColor: "#68d391",
              lineTension: 0.1,
              fill: false,
              pointBorderColor: "#68d391",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#68d391",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
          ],
        }}
        legend={{
          display: true,
          position: "top",
          fullWidth: true,
          reverse: false,
          labels: {
            fontColor: "#fff",
          },
        }}
        height={500}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "white",
                  callback: function(tick, index) {
                    if (isLogarithmic) {
                      return index % 3 === 0 ? tick.toLocaleString() : null
                    } else {
                      return tick
                    }
                  },
                },
                type: isLogarithmic ? "logarithmic" : "linear",
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                },
              },
            ],
          },
          layout: {
            padding: 30,
          },
        }}
      />
    </div>
  )
}

export default Chart
