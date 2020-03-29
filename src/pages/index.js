import React from "react"

import CovidProvider from "../context/CovidState"
import Navbar from "../components/Navbar"

const index = () => {
  return (
    <CovidProvider>
      <Navbar />
    </CovidProvider>
  )
}

export default index
