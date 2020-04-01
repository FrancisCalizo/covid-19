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
          <h1 className="text-sm md:text-base lg:text-xl ml-1">
            STATS |{" "}
            <span className="bg-teal-800 py-1 px-3 rounded-full border border-teal-400 shadow-2xl text-white">
              COVID-19
            </span>
          </h1>
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
