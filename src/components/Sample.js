import React, { useEffect, useState, useContext } from "react"
import CovidContext from "../context/covidContext"

const Sample = () => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   fetch("https://pomber.github.io/covid19/timeseries.json")
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // }, [])

  const covidContext = useContext(CovidContext)
  const { pairs, setPairs } = covidContext

  return (
    <div>
      <h1>I'm a sample component</h1>
      {pairs[0]}
    </div>
  )
}

export default Sample
