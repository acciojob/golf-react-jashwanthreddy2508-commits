import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleonclick() {
    setCount(count+5)
  }
  return (
    <>
    <div>
     <div className="ball"
        style={{
          transform: `translateX(${count}px)`,
          width: "50px",
          height: "50px",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
      />

      <button className="start" onClick={handleonclick}>Start</button>
        </div>
    </>
  )
}

export default App
