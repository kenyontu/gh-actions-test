import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './App.module.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.container}>
      <p data-testid="counter" className={styles.counter}>
        {counter}
      </p>
      <div className={styles.buttonContainer}>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
      <Link to="/about">About</Link>
    </div>
  )
}

export default App
