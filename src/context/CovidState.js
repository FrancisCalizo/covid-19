import React from "react"
import CovidContext from "./covidContext"

export default ({ children }) => {
  const teamMembersNames = ["John", "Mary", "Jason", "David"]

  const [pairs, setPairs] = React.useState(teamMembersNames)

  return (
    <CovidContext.Provider value={{ pairs }}>{children}</CovidContext.Provider>
  )
}
