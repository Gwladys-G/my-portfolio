import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrack } from '@fortawesome/free-solid-svg-icons'
import {faReact, faHtml5, faCss3, faJsSquare, faGitAlt, faVuejs } from '@fortawesome/free-brands-svg-icons'
import Loader from "react-loaders";
import { Link } from "react-router-dom";

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
    <>
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
          After working in Product Management and Product Operations in the tech industry for several years, i have decided to pursue my interest and excitement towards Web and Software Development.
        </p>
        <p>My technology skillsets currently include <span style={{fontWeight: 'bold'}}>Ruby On Rails</span>,<span style={{fontWeight: 'bold'}}> Javascript</span>,<span style={{fontWeight: 'bold'}}> VueJS</span> and <span style={{fontWeight: 'bold'}}>ReactJS</span>.</p>
        <p>I am actively practising <span style={{fontStyle: 'italic'}}>TypeScript</span> and <span style={{fontStyle: 'italic'}}>Express - NodeJs</span> and will update my <span>{<Link to="/portfolio" style = {{textDecoration: 'none', color: "#694F5D"}}>Portfolio</Link>}</span> as soon as I have projects up and running !</p>
        <p>
          Additionally, I have both my Professional Scrum Master I (PSM I) and Professional Scrum Product Owner (PSPO I)
          certifications.
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
            <FontAwesomeIcon icon={faVuejs} color="#7FC728" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="red" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="ball-spin-fade-loader"/>
    </>
  )
}

export default About
