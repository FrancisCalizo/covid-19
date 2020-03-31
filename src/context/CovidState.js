import React, { useState, useEffect } from "react"
import CovidContext from "./covidContext"

export default ({ children }) => {
  const [date] = useState(new Date())
  const [countryData, setCountryData] = useState({})
  const [countryDataToday, setCountryDataToday] = useState({})
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState("Afghanistan")
  const [globalTotals, setGlobalTotals] = useState({})
  const [isUsOnly, setIsUsOnly] = useState(false)

  useEffect(() => {
    // Country Data
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setCountryData(data))
      .catch(err => console.error(err))

    // Global Data
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(response => response.json())
      .then(data => setGlobalTotals(data))
      .catch(err => console.error(err))

    // Countries
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setCountries(Object.keys(data)))
      .catch(err => console.error(err))

    // USA Statistics
    fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "db1c0acdacmsh2be8155d9a6a22bp1cb848jsn48cdb1c2b494",
        },
      }
    )
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    // Current Country Data For Today Only
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data =>
        setCountryDataToday(
          data[currentCountry][data[currentCountry].length - 1]
        )
      )
  }, [currentCountry])

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
