import React, { useState, useEffect } from "react"
import CovidContext from "./covidContext"

export default ({ children }) => {
  const [countryData, setCountryData] = useState({})
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState('Afghanistan')
  const [isUsOnly, setIsUsOnly] = useState(false)
  const [globalTotals, setGlobalTotals] = useState({})
  const [date] = useState(new Date())

  useEffect(() => {
    // Country Data
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setCountryData(data))

    // Global Data
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(response => response.json())
      .then(data => setGlobalTotals(data))

    // Countries
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setCountries(Object.keys(data)))
  }, [])

  return (
    <CovidContext.Provider
      value={{
        countryData,
        globalTotals,
        countries,
        date,
        isUsOnly,
        setIsUsOnly,
        currentCountry,
        setCurrentCountry,
      }}
    >
      {children}
    </CovidContext.Provider>
  )
}
