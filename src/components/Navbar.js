import React from "react"

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between container items-center mx-auto px-8 py-4">
        <div>The Report | COVID-19</div>
        <div>
          <input
            className="rounded-full outline-none border-2 px-4 py-1"
            type="text"
            placeholder="Search by Country
        "
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
