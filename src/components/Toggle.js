import React, { useContext, useState } from "react"

import CovidContext from "../context/covidContext"

const Toggle = () => {
  const covidContext = useContext(CovidContext)
  const { isUsOnly, setIsUsOnly } = covidContext

  return (
    <div>
      <div className="flex items-center justify-end w-full">
        <label htmlFor="toggle" className="flex items-center cursor-pointer ">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              checked={isUsOnly}
              onChange={() => setIsUsOnly(!isUsOnly)}
            />
            <div className="flex justify-around items-center toggle__line w-24 h-8 bg-gray-700 rounded-full shadow-inner shadow-2xl">
              <div className="text-sm text-gray-300">USA</div>
              <div className="text-sm text-gray-300">Global</div>
            </div>
            <div className="toggle__dot absolute w-12 h-8 bg-white rounded-full shadow inset-y-0 left-0 border border-gray-700"></div>
          </div>
        </label>
      </div>
    </div>
  )
}

export default Toggle
