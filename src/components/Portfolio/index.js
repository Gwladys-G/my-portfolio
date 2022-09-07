import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import ProjectList from './ProjectList';

const Portfolio = () => {

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
    <div className='container portfolio-page'>
      <h1 className='page-title'>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={"Portfolio".split("")}
          idx={15}
        />
      </h1>
      <ProjectList/>
    </div>
    <Loader type="ball-spin-fade-loader"/>
    </>
  )
}

export default Portfolio
