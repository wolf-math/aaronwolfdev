import Layout from '@theme/Layout';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { 
  FaGithub, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaHtml5, 
  FaCss3, 
  FaDocker, 
  FaCloud, 
  FaDatabase, 
  FaLinux,
  FaNodeJs,
  FaTerminal,
  FaDesktop,
  FaCodeBranch,
  FaChalkboardTeacher,
  FaMicrochip,
  FaBook,
  FaLaptopCode,
  FaCode,
  FaLightbulb,
  FaBolt,
  FaRegLightbulb,
  FaRobot,
  FaFile,
  FaMarker
} from 'react-icons/fa';
import about from './about.module.scss';
import head from '../../static/images/headshot.jpg';

export default function About () {
  return (
  <Layout
    title="About"
    description="About the author"  
  >
    <div className={about.about}>

      {/* <Container fluid className="p-5 mb-4 bg-light rounded-3"> */}
        <img className={about.head} src={head} alt="headshot" />
        <h1>About <span className='highlight'>Aaron</span></h1>
      {/* </Container> */}

      <div className="content">
        <p>I'm a technical communicator, software developer, teacher, and lifelong nerd who loves building things, writing about how they work, and help others learn to do the same. My career has taken me from inner-city classrooms to high-tech companies, always exploring the space where education and technology meet. I’m passionate about open source and the idea that knowledge should be shared. Most of my projects (and even some of my old lesson plans) live on GitHub.</p>
        <p>Are you looking for a colaborator? <Link to="/contact">Reach out!</Link></p>
        <p>Are you looking for coding documentation? <Link to="/docs/category/coding-docs">It's right here!</Link></p>
      </div>

      <hr className={about.divider} />


      <h1><FaTerminal /> Coding <span className="highlight">Languages</span></h1>
        <div className={about.languages}>
        <div className={about.language}>
          <h3 className={about.skilltitle}><FaDesktop /> Full Stack Web</h3>
          <ul className={about.skills}>
            <li><FaJs /> JavaScript / TypeScript</li>
            <li><FaReact /> React</li>
            {/* <li>Next.js</li> */}
            <li><FaPython /> Django / REST Framework</li>
            <li><FaNodeJs /> Node.js</li>
            <li><FaHtml5 /> HTML5</li>
            <li><FaCss3 /> CSS3 / SASS</li>
          </ul>
        </div>

        <div className={about.language}>
          <h3 className={about.skilltitle}><FaCodeBranch /> Tools & Platforms</h3>
          <ul className={`${about.skills} nobullet`}>
            <li><FaDocker /> Docker / Docker Compose</li>
            <li><FaGithub /> Git / GitHub</li>
            <li><FaCloud /> Supabase / Firebase</li>
            <li><FaDatabase /> SQL / PostgreSQL</li>
            <li><FaLinux /> Linux / Bash</li>
            <li><FaMicrochip /> AI / ChatGPT</li>
          </ul>
        </div>

        <div className={about.language}>
          <h3 className={about.skilltitle}><FaChalkboardTeacher /> Teaching & Docs</h3>
          <ul className={`${about.skills} nobullet`}>
            <li><FaBook /> Technical Writing / Documentation</li>
            <li><FaLaptopCode /> Jupyter Notebook</li>
            <li><FaCode /> API Design & Integration</li>
            <li><FaLightbulb /> Curriculum Design / EdTech </li>
            <li><FaMarker /> Markdown</li>
            <li><FaFile /> MkDocs / Docusaurus</li>
          </ul>
        </div>

        <div className={about.language}>
          <h3 className={about.skilltitle}><FaMicrochip /> Hardware & Hobby</h3>
          <ul className={`${about.skills} nobullet`}>
            <li><FaBolt /> Arduino / Raspberry Pi</li>
            <li><FaRegLightbulb /> Electronics / Soldering</li>
            <li><FaRobot /> Drone building and flying</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)}
