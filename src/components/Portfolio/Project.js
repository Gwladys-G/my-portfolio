import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { skillIcons } from './DataProjects'



const Project = ({ project }) =>{

  return (
    <div className="image-box">
      <img src={project.cover} alt="snapshot" className="portfolio-image"/>
      <div className="content">
        <p className="title">{project.title}</p>
        <h4 className="description" style={{ display: 'flex', alignItems: 'baseline' }}>
          {project.skills.map((skill) => (
            <img
            src={skillIcons[skill]}
            alt={skill}
            style={{
              width: '10%',
              height: '15%',
              transition: 'transform 0.2s',
              margin: 'auto 5px auto 5px'
            }}
            className="skill-icon"
          />
          ))}
        </h4>
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
