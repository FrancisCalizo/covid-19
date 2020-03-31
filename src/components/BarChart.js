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
    <div className="lg:w-3/4 xl:w-2/3 mx-auto bg-gray-700 rounded my-10">
      <Bar
        data={{
          labels: ["Confirmed", "Deaths", "Recovered"],
          datasets: [
            {
              backgroundColor: [
                "rgba(99, 179, 237,0.5)",
                "rgba(241, 129, 129,0.5)",
                "rgba(104, 211, 144,0.5)",
              ],
              borderColor: [
                "rgba(99, 179, 237,0.9)",
                "rgba(241, 129, 129,0.9)",
                "rgba(104, 211, 144,0.9)",
              ],
              hoverBackgroundColor: [
                "rgba(99, 179, 237,0.8)",
                "rgba(241, 129, 129,0.8)",
                "rgba(104, 211, 144,0.8)",
              ],
              hoverBorderColor: [
                "rgba(99, 179, 237, 1)",
                "rgba(241, 129, 129, 1)",
                "rgba(104, 211, 144, 1)",
              ],
              data: [confirmed, deaths, recovered],
              borderWidth: 2,
              barThickness: "flex",
            },
          ],
        }}
        legend={{ display: false }}
        options={{
          aspectRatio: 2,
          maintainAspectRatio: true,
          layout: {
            padding: {
              top: 30,
              bottom: 30,
              left: 30,
              right: 30,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "white",
                },
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
          animation: {
            duration: 500,
            easing: "easeInQuad",
            onComplete: function() {
              let chartInstance = this.chart,
                ctx = chartInstance.ctx

              ctx.font = "1rem Arial"
              ctx.fillStyle = "white"
              ctx.textAlign = "center"
              ctx.textBaseline = "bottom"
              ctx.textAlign = "center"
              ctx.textBaseline = "bottom"

              this.data.datasets.forEach(function(dataset, i) {
                let meta = chartInstance.controller.getDatasetMeta(i)
                meta.data.forEach(function(bar, index) {
                  if (dataset.data[index] > 0) {
                    let data = dataset.data[index]
                    ctx.fillText(data, bar._model.x, bar._model.y)
                  } else {
                    let data = 0
                    ctx.fillText(data, bar._model.x, bar._model.y)
                  }
                })
              })
            },
            onProgress: function() {
              let chartInstance = this.chart,
                ctx = chartInstance.ctx

              ctx.font = "1rem Arial"
              ctx.fillStyle = "white"
              ctx.textAlign = "center"
              ctx.textBaseline = "bottom"

              this.data.datasets.forEach(function(dataset, i) {
                let meta = chartInstance.controller.getDatasetMeta(i)
                meta.data.forEach(function(bar, index) {
                  if (dataset.data[index] > 0) {
                    let data = dataset.data[index]
                    ctx.fillText(data, bar._model.x, bar._model.y)
                  } else {
                    let data = 0
                    ctx.fillText(data, bar._model.x, bar._model.y)
                  }
                })
              })
            },
          },
        }}
      />
    </div>
  )
}

export default BarChart
