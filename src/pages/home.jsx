import {links, pages} from './links'
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown, FaEnvelope } from 'react-icons/fa';
import styles from './home.module.scss';
import logo from '../../static/images/wolf-logo_D5.png';

const Homepage = () => {
  
  const scroll = () => {
    pages.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    // <div className={styles.home-background}>
      <div className={styles.homepage}>
        <div id={styles.greeting}>
          <div id={styles.mainlogo}>
            <img id={styles.logo} src={logo} alt="Logo" />
            <div className={styles.title}>
              <h1>Aaron Wolf</h1>
              <h3>Web Developer.<br/>
              Teacher.<br/>
              Nerd.</h3>
            </div>
          </div>
          <FaAngleDoubleDown id={styles.more} onClick={scroll} /> 
        </div>

        <div id={styles.pages} ref={pages}>
          {pages.map((page, i) => (
            <a className={styles.page} id={page.name} href={`/${page.name}`} key={i}>
              <img className={styles.linkLogo} src={page.logo} alt={page.name} />
              <h3 className={[styles.description, styles.typewriter]}>{page.text}</h3>
            </a>
          ))}
        </div>
        <div id={styles.icons}>
          {links.map(link => (
            <a href={link.location}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
            >
            <div className={styles.icon}>
              {link.icon}
            </div>
            </a>
          ))}
          <Link to="/contact">
          <div className={styles.icon}>
            <FaEnvelope  />
          </div>
          </Link>
        </div>
      </div>
    // </div>
  )
}

export default Homepage;
