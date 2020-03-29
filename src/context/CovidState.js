import React, { useState, useEffect } from "react"
import CovidContext from "./covidContext"

export default ({ children }) => {
  const [covidData, setCovidData] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentCountry, setCurrentCountry] = useState(null)

  useEffect(() => {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setCovidData(data))
  }, [])

  return (
    <CovidContext.Provider value={{ covidData }}>
      {children}
    </CovidContext.Provider>
  )
}
