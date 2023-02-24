import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import ProjectList from './ProjectList';
import { dataProjects } from './DataProjects'
import SearchBar from './SearchBar';

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [projects, setProjects] = useState([])
  const [searchResults, setSearchResults] = useState([])



  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)

    return () => {
        clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    setProjects(dataProjects)
    setSearchResults(dataProjects)
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
      <SearchBar projects={projects} setSearchResults={setSearchResults}/>
      <ProjectList projects={projects} setSearchResults={setSearchResults} searchResults={searchResults} />
    </div>
    <Loader type="ball-spin-fade-loader"/>
    </>
  )
}

export default Portfolio
