import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from "react";


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {

    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

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
    </div>
  )
}

export default About
