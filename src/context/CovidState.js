import React, { useState, useEffect } from "react"

import CovidContext from "./covidContext"
import { stateNames } from "./stateNames"

export default ({ children }) => {
  const [date] = useState(new Date())
  const [isUsOnly, setIsUsOnly] = useState(false)

  const [globalTotals, setGlobalTotals] = useState({})
  const [countryData, setCountryData] = useState({})
  const [countryDataToday, setCountryDataToday] = useState({})
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState("Afghanistan")

  const [usaTotals, setUsaTotals] = useState([])
  const [stateData, setStateData] = useState([])
  const [states] = useState(stateNames)
  const [currentState, setCurrentState] = useState("Alabama")

  // Initial State To Be Loaded
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

    // USA Totals
    fetch("https://api.covidtracking.com/v1/us/current.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => setUsaTotals(data[0]))
      .catch(err => {
        console.error(err)
      })
    /** API is not working anymore */ 
    // fetch("https://covid-193.p.rapidapi.com/statistics?country=USA", {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-host": "covid-193.p.rapidapi.com",
    //     "x-rapidapi-key": "db1c0acdacmsh2be8155d9a6a22bp1cb848jsn48cdb1c2b494",
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => setUsaTotals(data.response[0]))
    //   .catch(err => {
    //     console.error(err)
    //   })

    // USA Statistics
    fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US",
      {
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key":
            "db1c0acdacmsh2be8155d9a6a22bp1cb848jsn48cdb1c2b494",
        },
      }
    )
      .then(response => response.json())
      .then(data => setStateData(data.data.covid19Stats))
      .catch(err => console.error(err))
  }, [])

  // Current Country Data For Today Only
  useEffect(() => {
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
        countryDataToday,
        stateData,
        states,
        currentState,
        setCurrentState,
        usaTotals,
      }}
    >
      {children}
    </CovidContext.Provider>
  )
}
