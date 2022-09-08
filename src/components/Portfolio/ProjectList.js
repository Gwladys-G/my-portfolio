import React from 'react'
// import portfolioData from "../../data/portfolio.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { dataProjects } from './DataProjects'



export default function ProjectList() {
  return (
    <div className="images-container">
    {
      dataProjects.map((project, idx) => {
        return (
          <div className="image-box" key={idx}>
              <img src={project.cover} alt="snapshot" className="portfolio-image"/>
              <div className="content">
                  <p className="title">{project.title}</p>
                  <h4 className="description">{project.skills.join(", ")}</h4>
                  <div className='wrapper-cta'>
                  <button
                      className="btn"
                      onClick={() => window.open(project.url)}
                  >View
                    </button>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="github"
                      onClick={() => window.open(project.github)}
                      color='#4d4d4e'
                    />
                  </div>
              </div>
            </div>
          )
      })
    }
  </div>
  )
}
