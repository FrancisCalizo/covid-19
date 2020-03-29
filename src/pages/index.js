import React from "react"

import CovidProvider from "../context/CovidState"
import Navbar from "../components/Navbar"
import Totals from "../components/Totals"

const index = () => {
  return (
    <CovidProvider>
      <Navbar />
      <Totals />
    </CovidProvider>
  )
}

export default index
