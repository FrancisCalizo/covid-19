import React, { useContext, useRef } from "react"

import CovidContext from "../context/covidContext"

const Toggle = () => {
  const covidContext = useContext(CovidContext)
  const { isUsOnly, setIsUsOnly } = covidContext

  const usaButton = useRef(null)
  const globalButton = useRef(null)

  const handleClick = e => {
    if (e.target === usaButton.current) {
      setIsUsOnly(true)
    } else {
      setIsUsOnly(false)
    }
  }

  return (
    <div className="flex">
      <div
        className={`px-3 md:px-4 py-1 border border-black rounded-l border border-teal-400 text-white ${
          isUsOnly
            ? "bg-teal-800 hover:bg-teal-900"
            : "bg-gray-700 hover:bg-gray-800"
        } cursor-pointer text-xs  md:text-base`}
        onClick={handleClick}
        ref={usaButton}
      >
        USA
      </div>
      <div
        className={`px-2 md:px-3 py-1 border border-black rounded-r border border-teal-400 text-white ${
          !isUsOnly
            ? "bg-teal-800 hover:bg-teal-900"
            : "bg-gray-700 hover:bg-gray-800"
        } cursor-pointer text-xs  md:text-base`}
        onClick={handleClick}
        ref={globalButton}
      >
        Global
      </div>
    </div>
  )
}

export default Toggle
