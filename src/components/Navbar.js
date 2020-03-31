import React, { useContext } from "react"

import CovidContext from "../context/covidContext"

const Navbar = () => {
  const covidContext = useContext(CovidContext)
  const { countries, currentCountry, setCurrentCountry } = useContext(CovidContext)

  const handleChange = e => {
    setCurrentCountry(e.target.value)
  }

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between container items-center mx-auto px-8 py-4">
        <div className="text-gray-400">By the Numbers | COVID-19</div>
        <div>
          <div className="inline-block relative w-48">
            <select className="select-arrow h-8 block w-full text-gray-300 bg-gray-700 border border-gray-800 pl-2 hover:border-gray-500 rounded
              shadow leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} defaultValue='Italy'
              >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
              <svg
                className="fill-current h-8 w-8 text-white"
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
