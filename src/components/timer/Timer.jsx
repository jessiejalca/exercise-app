// Timer functionality from https://stackoverflow.com/questions/58162642/how-to-reset-data-in-useeffect-react-hooks-before-each-rendering

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import TopBar from "../topBar/TopBar"

const Timer = () => {
  const location = useLocation()
  const initMin = location.state.duration
  const initSec = 0
  const [minutes, setMinutes] = useState(initMin)
  const [seconds, setSeconds] = useState(initSec)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  const resetTimer = () => {
    setMinutes(initMin)
    setSeconds(initSec)
  }

  return (
    <div className="exercise-page">
      <TopBar resetFunction={resetTimer} />
      <div className="exercise">
        <h1>{location.state.name}</h1>
        <h2>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
        {/* <button onClick={() => startTimer()}>Start the clock</button> */}
      </div>
    </div>
  )
}

export default Timer
