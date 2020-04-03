import React, { useContext, useState, useEffect } from "react"
import { Transition } from "react-transition-group"

import CovidContext from "../../context/covidContext"
import LineChart from "../LineChart"
import BarChart from "../BarChart"

const Global = () => {
  const covidContext = useContext(CovidContext)

  const {
    countries,
    currentCountry,
    setCurrentCountry,
    isUsOnly,
    states,
    currentState,
    setCurrentState,
  } = covidContext

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isUsOnly) {
      setCurrentState("Alabama")
    } else {
      setCurrentCountry("Afghanistan")
    }
  }, [isUsOnly])

  const handleChange = e => {
    isUsOnly
      ? setCurrentState(e.target.value)
      : setCurrentCountry(e.target.value)
  }

  return (
    <Transition in={isLoaded} timeout={500}>
      {state => (
        <div>
          <div
            className={`${
              isLoaded ? "opacity-100" : "opacity-0"
            } totals-transition container my-8 mx-auto px-8 bg-gray-800`}
          >
            <h1 className="text-3xl text-center text-white">
              Statistics By {isUsOnly ? "State" : "Country"}
            </h1>
            <select
              className="h-12 mb-4 mt-3 text-center text-xl block mx-auto w-64 text-gray-300 bg-gray-700
              border border-gray-800 hover:border-blue-700 rounded
              shadow leading-tight focus:outline-none shadow-outline cursor-pointer"
              onChange={handleChange}
              value={isUsOnly ? currentState : currentCountry}
            >
              {isUsOnly
                ? states.map(state => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))
                : countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
            </select>
            <BarChart />
            {!isUsOnly && <LineChart />}
          </div>
        </div>
      )}
    </Transition>
  )
}

export default Global
