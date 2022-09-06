import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import ParticleHomeBackground from "../TsParticles";


const Layout = () => {
  return(
    <div className='App'>
      <Sidebar/>
      <div className='page'>
      <ParticleHomeBackground/>
        <span className='tags top-tag-html'>&lt;html&gt;</span>
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
