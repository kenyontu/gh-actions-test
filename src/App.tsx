import { useState } from 'react'

import styles from './App.module.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <p data-testid="counter" className={styles.counter}>
        {counter}
      </p>
      <div className={styles.buttonContainer}>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment
        </button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
