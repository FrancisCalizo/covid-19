import React, { useEffect, useState } from "react"

const Sample = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <h1>I'm a sample component</h1>
    </div>
  )
}

export default Sample
