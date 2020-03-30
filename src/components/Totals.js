import React, { useContext } from "react"
import CovidContext from "../context/covidContext"

const Totals = () => {
  const covidContext = useContext(CovidContext)
  const { globalTotals, date } = covidContext

  return (
    <div className="bg-gray-800 py-6">
      <div className="flex justify-center container mx-auto">
        <div className="w-1/5 mx-2">
          <div className="border border-gray-800 rounded bg-gray-700 shadow-xl py-2 px-4">
            <h3 className="inline-block text-white bg-blue-400 px-3 py-1 rounded-full">
              Cases
            </h3>
            <h3 className="text-3xl text-right border-b-4 text-white border-blue-400 pb-4">
              {globalTotals.cases}
            </h3>
          </div>
        </div>
        <div className="w-1/5 mx-2">
          <div className="border border-gray-800 rounded bg-gray-700 shadow-xl py-2 px-4">
            <h3 className="inline-block text-white bg-red-400 px-3 py-1 rounded-full">
              Deaths
            </h3>
            <h3 className="text-3xl text-right border-b-4 text-white border-red-400 pb-4">
              {globalTotals.deaths}
            </h3>
          </div>
        </div>
        <div className="w-1/5 mx-2">
          <div className="border border-gray-800 rounded bg-gray-700 shadow-xl py-2 px-4">
            <h3 className="inline-block text-white bg-green-400 px-3 py-1 rounded-full">
              Recovered
            </h3>
            <h3 className="text-3xl text-right border-b-4 text-white border-green-400 pb-4">
              {globalTotals.recovered}
            </h3>
          </div>
        </div>
        <div className="w-1/5 mx-2">
          <div className="border border-gray-800 rounded bg-gray-700 shadow-xl py-2 px-4">
            <h3 className="inline-block text-white bg-yellow-400 px-3 py-1 rounded-full">
              Last Update
            </h3>
            <h3 className="text-3xl text-right border-b-4 text-white border-yellow-400 pb-4">
              {`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Totals
