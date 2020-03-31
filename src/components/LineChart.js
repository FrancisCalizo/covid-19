import React, { useContext, useEffect, useState } from "react"
import { Line } from "react-chartjs-2"

import CovidContext from "../context/covidContext"

const LineChart = () => {
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

  const handleChange = e => {
    setIsLogarithmic(e.target.checked)
  }

  return (
    <div className="lg:w-3/4 xl:w-2/3 mx-auto bg-gray-700 rounded">
      <div className="flex justify-center py-4">
        <label className="inline-block flex justify-start items-start">
          <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
            <input
              type="checkbox"
              className="opacity-0 absolute"
              onChange={handleChange}
              checked={isLogarithmic}
            />
            <svg
              className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <div className="select-none text-white">Use Logarithmic Scale</div>
        </label>
      </div>
      <Line
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
        options={{
          aspectRatio: 0.5,
          maintainAspectRatio: true,
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

export default LineChart
