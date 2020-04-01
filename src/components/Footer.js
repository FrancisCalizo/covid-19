import React from "react"

const Footer = () => {
  return (
    <footer className="text-gray-500 py-6 bg-gray-900 w-full">
      <div className="flex justify-between text-xs sm:text-base px-8 container mx-auto">
        <div>
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
        <div>
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
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
