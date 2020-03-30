import React, { useContext } from "react"

import CovidContext from "../context/covidContext"

const Navbar = () => {
  const covidContext = useContext(CovidContext)
  const { search, setSearch } = covidContext

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between container items-center mx-auto px-8 py-4">
        <div className="text-gray-400">By the Numbers | COVID-19</div>
        <div>
          <input
            className="rounded-full outline-none border-2 px-4 py-1"
            type="text"
            placeholder="Search by Country"
            value={search}
            onChange={handleChange}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
