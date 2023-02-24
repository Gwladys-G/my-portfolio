import React from 'react'
import Project from './Project'
// import portfolioData from "../../data/portfolio.json"


const ProjectList = ({ searchResults }) => {

  return (
    <div className="images-container">
    {
      searchResults.map((project, idx) => {
        return (
            <Project project={project}/>
          )
      })
    }
  </div>
  )
}

export default ProjectList
