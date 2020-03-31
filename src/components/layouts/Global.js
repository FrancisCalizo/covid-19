import React, { useContext } from "react"

import CovidContext from "../../context/covidContext"
import Chart from "../Chart"

const Global = () => {
  const covidContext = useContext(CovidContext)
  const { currentCountry } = covidContext

  return (
    <div className="container my-8 mx-auto px-8 ">
      <h1 className="text-6xl text-center mb-4">{currentCountry}</h1>
      <Chart />
    </div>
  )
}

export default Global
