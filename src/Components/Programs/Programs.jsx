import React from 'react'
import "./Programs.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"
import { Link } from "react-scroll"

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program, index)=>(
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              className="join-now"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow"/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
