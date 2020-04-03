import React from "react"

const Footer = () => {
  return (
    <footer className="text-gray-500 py-6 bg-gray-900 w-full mt-10">
      <div className="flex flex-wrap md:flex-no-wrap justify-center md:justify-between text-xs sm:text-base px-8 container mx-auto">
        <div className="w-full md:w-auto inline-block text-center">
          Coded with ❤️ by{" "}
          <a
            href="https://www.franciscalizo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400 font-bold"
          >
            Francis Calizo
          </a>
        </div>
        <div className="w-full md:w-auto text-center">
          🔎 Sources:{" "}
          <a
            href="https://github.com/javieraviles/covidAPI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400 font-bold"
          >
            Covid-API
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/pomber/covid19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400 font-bold"
          >
            Pomber
          </a>{" "}
          |{" "}
          <a
            href="https://rapidapi.com/api-sports/api/covid-193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-teal-400 font-bold"
          >
            API Sports
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
