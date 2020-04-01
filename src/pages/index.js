import React from "react"

import CovidProvider from "../context/CovidState"
import Navbar from "../components/Navbar"
import GlobalTotals from "../components/GlobalTotals"
import Global from "../components/layouts/Global"

const index = () => {
  return (
    <CovidProvider>
      <Navbar />
      <GlobalTotals />
      <div className="flex container px-8 mx-auto">
        <div className="w-full border-b-2 border-gray-300 my-6"></div>
      </div>
      <Global />
    </CovidProvider>
  )
}

export default index
