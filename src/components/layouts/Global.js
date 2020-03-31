import React, { useContext } from "react"

import CovidContext from "../../context/covidContext"
import Chart from "../Chart"

const Global = () => {
  const covidContext = useContext(CovidContext)
  const { countries, currentCountry, setCurrentCountry } = useContext(CovidContext)

  const handleChange = e => {
    setCurrentCountry(e.target.value)
  }

  return (
    <div className="container my-8 mx-auto px-8 bg-gray-800">
      <h1 className="text-2xl text-center text-white">Statistics By Country</h1>
      <select className="h-12 mb-4 mt-3 text-center text-lg block mx-auto w-40 text-gray-300 bg-gray-700 border border-gray-800 pl-2 hover:border-gray-500 rounded
        shadow leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}
        >
        {countries.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <Chart />
    </div>
  )
}

export default Global
