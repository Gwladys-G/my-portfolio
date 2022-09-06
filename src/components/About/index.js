import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrack } from '@fortawesome/free-solid-svg-icons'
import {faReact, faHtml5, faCss3, faJsSquare, faGitAlt, faNodeJs } from '@fortawesome/free-brands-svg-icons'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {

    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)

    return () => {
        clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
          />
        </h1>
        <p>
          After working in Product Management and
          Product Operations in the tech industry for several
          years, i have decided to focus on the technical and
          development aspects of that field.
        </p>
        <p>
          I am very excited to contribute and expand my
          web development skills as a Full Stack or Backend
          Software Developer.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNodeJs} color="#7FC728" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="red" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
