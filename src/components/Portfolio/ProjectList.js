import React from 'react'
import portfolioData from "../../data/portfolio.json"



export default function ProjectList() {
  return (
    <div className="images-container">
    {
        portfolioData.portfolio.map((project, idx) => {
            return (
                <div className="image-box" key={idx}>
                  <img src="https://via.placeholder.com/50" alt="snapshot" className="portfolio-image"/>
                  <div className="content">
                      <p className="title">{project.name}</p>
                      <h4 className="description">{project.skills}</h4>
                      <button
                          className="btn"
                          onClick={() => window.open(project.url)}
                      >View</button>
                  </div>
                </div>
            )
        })
    }
  </div>
  )
}
