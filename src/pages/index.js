import React from "react"

import CovidProvider from "../context/CovidState"
import Sample from "../components/Sample"

const index = () => {
  return (
    <CovidProvider>
      <div>
        <Sample />
      </div>
    </CovidProvider>
  )
}

export default index
