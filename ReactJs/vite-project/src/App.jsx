import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount(Math.floor(random()*100))}>
          count is {count}
        </button>
    </>
  )
}

export default App
