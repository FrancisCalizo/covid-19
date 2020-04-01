import React from "react"

import CovidProvider from "../context/CovidState"
import Navbar from "../components/Navbar"
import UnderNav from "../components/layouts/UnderNav"
import GlobalTotals from "../components/GlobalTotals"
import Global from "../components/layouts/Global"
import Footer from "../components/Footer.js"

const index = () => {
  return (
    <CovidProvider>
      <Navbar />
      <UnderNav>
        <GlobalTotals />
        <div className="flex container px-8 mx-auto">
          <div className="w-full border-b-2 border-gray-300 my-6"></div>
        </div>
        <Global />
        <Footer />
      </UnderNav>
    </CovidProvider>
  )
}

export default index
