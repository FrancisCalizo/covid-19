import React from "react"

import CovidProvider from "../context/CovidState"
import Navbar from "../components/Navbar"
import Totals from "../components/Totals"
import Toggle from "../components/Toggle"
import Global from "../components/layouts/Global"

const index = () => {
  return (
    <CovidProvider>
      <Navbar />
      <Totals />
      {/* <Toggle /> */}
      <Global />
    </CovidProvider>
  )
}

export default index
