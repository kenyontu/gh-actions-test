import { Link } from 'react-router-dom'

import styles from './About.module.css'

function About() {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
      <p>This is the about page</p>
    </div>
  )
}

export default About
