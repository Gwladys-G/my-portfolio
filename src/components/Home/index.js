import LogoTitle from "../../assets/images/logo.png"
import { Link } from "react-router-dom"
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";


const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['w','l','a','d','y','s!']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','_']


  useEffect(() => {

    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
        clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div  className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>e</span>
        <span className={`${letterClass} _13`}>l</span>
        <span className={`${letterClass} _14`}>l</span>
        <span className={`${letterClass} _15`}>o</span>
        <span className={`${letterClass} _16`}> </span>
        <span className={`${letterClass} _17`}>t</span>
        <span className={`${letterClass} _18`}>h</span>
        <span className={`${letterClass} _19`}>e</span>
        <span className={`${letterClass} _20`}>r</span>
        <span className={`${letterClass} _21`}>e,</span>
        <span className={`${letterClass} _22`}> </span>
        <span className={`${letterClass} _23`}>I</span>
        <span className={`${letterClass} _24`}>'m</span>
        <span className={`${letterClass} _25`}> </span>
        <span className={`${letterClass} _26`}>G</span>
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={26}/>
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={32}/>
        </h1>
        <h2>Inspiring Full Stack Developer</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>

    </div>
  )
}

export default Home
