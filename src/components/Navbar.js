import React, { useContext } from "react"

import CovidContext from "../context/covidContext"
import Toggle from "./Toggle"

const Navbar = () => {

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between container items-center mx-auto px-8 py-4">
        <div className="text-lg text-gray-400">By the Numbers | COVID-19</div>
        <div>
          <div className="inline-block relative w-48">
            <Toggle/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
