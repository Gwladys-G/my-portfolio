import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Pdf from './Gwladys_Engels_Oct_2022.pdf';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Experience = () => {

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
      <div className='container experience-page'>
        <h1 className='page-title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Background".split("")}
              idx={15}
            />
        </h1>
        <div className='content-zone'>
          <div className="Download-Resume">
              <button><a href = {Pdf} target = "_blank" rel="noreferrer">See My Resume</a></button>
          </div>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/gwladysengels/' className='Linkedin-bck'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
          </a>
        </div>

     </div>
      <Loader type="ball-spin-fade-loader"/>
    </>
  )
}

export default Experience
