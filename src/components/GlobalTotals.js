import React, { useContext } from "react"
import CountUp from "react-countup"

import CovidContext from "../context/covidContext"

const GlobalTotals = () => {
  const covidContext = useContext(CovidContext)
  const { globalTotals, date } = covidContext

  return (
    <div className="bg-gray-800 py-2">
      <h1 className="text-white text-center text-3xl">Global Statistics</h1>
      <div className="flex justify-center flex-wrap md:flex-no-wrap container mx-auto">
        <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
          <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
            <h3 className="md:text-xs lg:text-sm xl:text-base inline-block text-gray-200 bg-blue-400 px-3 py-1 rounded-full">
              Cases
            </h3>
            <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-blue-400 pb-4 py-2">
              {!Object.keys(globalTotals).length ? (
                "0"
              ) : (
                <CountUp separator="," end={globalTotals.cases} />
              )}
            </h3>
          </div>
        </div>
        <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
          <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
            <h3 className="md:text-xs lg:text-sm xl:text-base inline-block text-gray-200 bg-red-400 px-3 py-1 rounded-full">
              Deaths
            </h3>
            <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-red-400 pb-4 py-2">
              {!Object.keys(globalTotals).length ? (
                "0"
              ) : (
                <CountUp separator="," end={globalTotals.deaths} />
              )}
            </h3>
          </div>
        </div>
        <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
          <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
            <h3 className="md:text-xs lg:text-sm xl:text-base inline-block text-gray-200 bg-green-400 px-3 py-1 rounded-full">
              Recovered
            </h3>
            <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-green-400 pb-4 py-2">
              {!Object.keys(globalTotals).length ? (
                "0"
              ) : (
                <CountUp separator="," end={globalTotals.recovered} />
              )}
            </h3>
          </div>
        </div>
        <div className="w-4/5 sm:w-2/5 md:w-1/5 mx-2">
          <div className="border border-gray-600 rounded bg-gray-700 shadow-2xl my-2 py-3 px-4">
            <h3 className="md:text-xs lg:text-sm xl:text-base inline-block text-gray-700 bg-yellow-400 px-3 py-1 rounded-full">
              Last Update
            </h3>
            <h3 className="text-3xl md:text-xl lg:text-2xl xl:text-3xl text-right border-b-4 text-white border-yellow-400 pb-4 py-2">
              {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalTotals
