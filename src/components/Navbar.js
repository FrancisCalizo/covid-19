import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Toggle from "./Toggle"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query sickImageQuery {
      sickImage: file(relativePath: { eq: "sick.webp" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  `)

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between container items-center mx-auto px-8 py-4">
        <div className="flex items-center text-gray-400">
          <Img
            fixed={data.sickImage.childImageSharp.fixed}
            alt={data.sickImage.childImageSharp.fixed.originalName}
          />
          <h1 className="text-xl ml-1">By the Numbers | COVID-19</h1>
        </div>
        <div>
          <div className="inline-block relative w-48">
            <Toggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
