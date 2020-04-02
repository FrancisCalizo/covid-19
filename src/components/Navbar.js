import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Transition } from "react-transition-group"
import Img from "gatsby-image"

import Toggle from "./Toggle"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query sickImageQuery {
      sickImage: file(relativePath: { eq: "mask.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 50) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  `)

  const [navColor, setNavColor] = useState("bg-gray-800")
  const [navHeight, setNavHeight] = useState("py-4")
  const [navBorder, setNavBorder] = useState("border-none")
  const [navChange, setNavChange] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY > 82) {
        setNavColor("bg-gray-900")
        setNavHeight("py-2")
        setNavBorder("border-b border-teal-400")
      } else {
        setNavColor("bg-gray-800")
        setNavHeight("py-4")
        setNavBorder("border-none")
      }
    })
  }, [])

  return (
    <Transition in={navChange} timeout={500}>
      {state => (
        <nav
          state={state}
          className={`nav-transition ${navColor} fixed w-full top-0 z-10 border-b ${navBorder}`}
        >
          <div
            state={state}
            className={`nav-transition flex justify-between container items-center mx-auto px-8 ${navHeight}`}
          >
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
              <Toggle />
            </div>
          </div>
        </nav>
      )}
    </Transition>
  )
}

export default Navbar
