import React, { useContext, useState, useEffect } from "react"
import CountUp from "react-countup"
import { Transition } from "react-transition-group"

import CovidContext from "../context/covidContext"

const GlobalTotals = () => {
  const covidContext = useContext(CovidContext)
  const { globalTotals, usaTotals, date, isUsOnly } = covidContext

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Transition in={isLoaded} timeout={500}>
      {state => (
        <div className="bg-gray-800 pt-6 sm:pt-2 pb-2">
          <h1 className="text-white text-center text-2xl sm:text-3xl">
            {isUsOnly ? "USA Statistics" : "Global Statistics"}
          </h1>
          <div
            className={`${
              isLoaded ? "opacity-100" : "opacity-0"
            } totals-transition flex justify-center flex-wrap md:flex-no-wrap container mx-auto`}
            state={state}
          >
            <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
              <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
                <h3 className="md:text-xs lg:text-sm xl:text-base inline-block font-bold text-gray-200 bg-blue-400 px-3 py-1 rounded-full">
                  Cases
                </h3>
                <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-blue-400 pb-4 py-2">
                  {!Object.keys(globalTotals).length ? (
                    "0"
                  ) : (
                    <CountUp
                      separator=","
                      end={
                        isUsOnly ? usaTotals.cases.total : globalTotals.cases
                      }
                      delay={0.15}
                    />
                  )}
                </h3>
              </div>
            </div>
            <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
              <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
                <h3 className="md:text-xs lg:text-sm xl:text-base inline-block font-bold text-gray-200 bg-red-400 px-3 py-1 rounded-full">
                  Deaths
                </h3>
                <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-red-400 pb-4 py-2">
                  {!Object.keys(globalTotals).length ? (
                    "0"
                  ) : (
                    <CountUp
                      separator=","
                      end={
                        isUsOnly ? usaTotals.deaths.total : globalTotals.deaths
                      }
                      delay={0.15}
                    />
                  )}
                </h3>
              </div>
            </div>
            <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
              <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
                <h3 className="md:text-xs lg:text-sm xl:text-base inline-block font-bold text-gray-200 bg-green-400 px-3 py-1 rounded-full">
                  Recovered
                </h3>
                <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-green-400 pb-4 py-2">
                  {!Object.keys(globalTotals).length ? (
                    "0"
                  ) : (
                    <CountUp
                      separator=","
                      end={
                        isUsOnly
                          ? usaTotals.cases.recovered
                          : globalTotals.recovered
                      }
                      delay={0.15}
                    />
                  )}
                </h3>
              </div>
            </div>
            <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
              <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
                <h3 className="md:text-xs lg:text-sm xl:text-base inline-block font-bold text-gray-700 bg-yellow-400 px-3 py-1 rounded-full">
                  Last Update
                </h3>
                <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-yellow-400 pb-4 py-2">
                  {`${date.getMonth() +
                    1}/${date.getDate()}/${date.getFullYear()}`}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}

export default GlobalTotals
