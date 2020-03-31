import React, { useState, useEffect } from "react"
import CovidContext from "./covidContext"

export default ({ children }) => {
  const [countryData, setCountryData] = useState({})
  const [currentCountry, setCurrentCountry] = useState("Italy")
  const [isUsOnly, setIsUsOnly] = useState(false)
  const [globalTotals, setGlobalTotals] = useState({})
  const [date] = useState(new Date())
  const [search, setSearch] = useState("")

  useEffect(() => {
    // Country Data
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setCountryData(data))

    // Global Data
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(response => response.json())
      .then(data => setGlobalTotals(data))
  }, [])

  return (
    <CovidContext.Provider
      value={{
        countryData,
        globalTotals,
        date,
        isUsOnly,
        setIsUsOnly,
        search,
        setSearch,
        currentCountry,
        setCurrentCountry,
      }}
    >
      {children}
    </CovidContext.Provider>
  )
}
