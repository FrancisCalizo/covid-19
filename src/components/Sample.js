import React, { useContext } from "react"
import CovidContext from "../context/covidContext"

const Sample = () => {
  const covidContext = useContext(CovidContext)
  const { covidData, setCovidData } = covidContext

  return (
    <div>
      <h1 className="text-red-500">I'm a sample component</h1>
    </div>
  )
}

export default Sample
