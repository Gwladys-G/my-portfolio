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

  // const renderPortfolio = (portfolio) => {
  //   return (
  //     <div className="images-container">
  //     {
  //         portfolio.map((project, idx) => {
  //             return (
  //                 <div className="image-box" key={idx}>
  //                   <img src="https://via.placeholder.com/50" alt="snapshot" className="portfolio-image"/>
  //                   <div className="content">
  //                       <p className="title">{project.name}</p>
  //                       <h4 className="description">{project.skills}</h4>
  //                       <button
  //                           className="btn"
  //                           onClick={() => window.open(project.url)}
  //                       >View</button>
  //                   </div>
  //                 </div>
  //             )
  //         })
  //     }
  // </div>
  //   )
  // }
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
