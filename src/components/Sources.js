import React from "react"

const Sources = () => {
  return (
    <div className="my-10 text-center flex flex-col items-center">
      <div className="w-full max-w-4xl px-6 border-t border-gray-700 pt-4">
        <h3 className="text-gray-300 text-2xl">
          Learn More About <span className="font-bold">COVID-19</span>:
        </h3>
      </div>
      <div>
        <ul className="text-teal-400 my-4">
          <li>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              World Health Organization
            </a>
          </li>
          <li>
            <a
              href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Center for Disease Control and Prevention
            </a>
          </li>
          <li>
            <a
              href="https://www.osha.gov/SLTC/covid-19/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Occupational Heath and Safety Administration
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-4xl text-gray-300 px-6 pb-4">
        <p className="italic">
          All content provided on this website is for informational purposes
          only. The owner of this site makes no representations as to the
          accuracy or completeness of any information on this site or found by
          following any link on this site. The owner will not be liable for any
          errors or omissions in this information nor for the availability of
          this information. The owner will not be liable for any losses,
          injuries, or damages from the display or use of this information. All
          information is provided on an as-is basis.
        </p>
      </div>
    </div>
  )
}

export default Sources
