import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import portfolioData from "../../data/portfolio.json"

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

  const renderPortfolio = (portfolio) => {
    return (
      <div className='images-container'>
        <ul>

        {
          portfolio.map((project,idx) => {
            return (
              <li>
              <div className='image-box' key={idx}>
                {/* <img src={project.cover}
                  alt="projectcover"
                  className='portfolio-cover'/> */}
                <a href={project.url} target="_blank" rel="noreferrer">{project.title}</a>
              </div>
              </li>
            )
          })
        }
        </ul>

      </div>
    )
  }
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
      <div>{renderPortfolio(portfolioData.portfolio)}</div>
    </div>
    <Loader type="ball-spin-fade-loader"/>
    </>
  )
}

export default Portfolio
