import './index.scss'
import{Link, NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUser, faBars, faBriefcase, faEye, faClose } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {

  const [showNav, setShowNav] = useState(false)

  return (
      <div className='nav-bar'>
        <h4 className='logo' style={{textAlign: 'center'}}>
          <Link className="link-to" to='/'>
            Gwladys Engels
          </Link>
        </h4>
        <nav className={showNav? 'mobile-show' : ''}>
          <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience" onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>
          {/* <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink> */}
          <FontAwesomeIcon icon={faClose}
            color="#BB9F06"
            className='close-icon'
            size='3x'
            onClick={() => setShowNav(false)} />

        </nav>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/gwladysengels/'>
              <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/Gwladys-G'>
              <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          color="#BB9F06"
          className='hamburger-icon'
          size='3x'
          onClick={() => setShowNav(true)}
        />
      </div>
    )

}

export default Sidebar
