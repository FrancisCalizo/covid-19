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
      <Global />
    </CovidProvider>
  )
}

export default index
