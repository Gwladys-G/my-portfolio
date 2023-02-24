import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
const Project = ({ project }) =>{

  return (
    <div className="image-box">
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
}

export default Project
