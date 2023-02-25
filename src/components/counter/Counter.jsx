import "./Counter.css"
import TopBar from "../topBar/TopBar"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Counter = () => {
  const location = useLocation()
  let [reps, setReps] = useState(0)

  const resetReps = () => {
    setReps(0)
  }

  const increaseReps = () => {
    setReps((prevCount) => prevCount + 1)
  }

  const decrementReps = () => {
    setReps((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1
      } else {
        return 0
      }
    })
  }

  return (
    <div className="exercise-page">
      <TopBar resetFunction={resetReps} />
      <div className="exercise">
        <h1>{location.state.name}</h1>
        <h2>
          {reps}
          <span>/ {location.state.reps}</span>
        </h2>
        <div className="clickers">
          <button onClick={decrementReps}>-</button>
          <button onClick={increaseReps}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
