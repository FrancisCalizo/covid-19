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
      <div className="container px-8">
        <div className="border-b-2 border-gray-300 my-6" />
      </div>
      <Global />
    </CovidProvider>
  )
}

export default index
