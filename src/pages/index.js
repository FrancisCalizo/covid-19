import React from "react"

import CovidProvider from "../context/CovidState"
import Navbar from "../components/Navbar"
import Totals from "../components/Totals"
import Toggle from "../components/Toggle"

const index = () => {
  return (
    <CovidProvider>
      <Navbar />
      <Totals />
      <Toggle />
    </CovidProvider>
  )
}

export default index
