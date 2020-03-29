import React, { useContext } from "react"
import CovidContext from "../context/covidContext"

const Totals = () => {
  const covidContext = useContext(CovidContext)
  const { globalTotals } = covidContext

  return (
    <div>
      <h1>Total Cases: {globalTotals.cases}</h1>
      <h1>Total Deaths: {globalTotals.deaths}</h1>
      <h1>Total Recovered: {globalTotals.recovered}</h1>
    </div>
  )
}

export default Totals
