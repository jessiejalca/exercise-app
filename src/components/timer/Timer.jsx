// Countdown Timer from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

import { useState } from "react"
import { useLocation } from "react-router-dom"

const Timer = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <>
      <h1>Timer Exercise</h1>
    </>
  )
}

// const Timer = () => {
//   const location = useLocation()
//   console.log(location.state)

//   let [time, setTime] = useState(`${props.duration}:00`)
//   const timeInt = parseInt(time, 10)
//   console.log(from)

//   const startTimer = (duration) => {
//     duration = duration * 60
//     let timer = duration,
//       minutes,
//       seconds

//     const countdown = setInterval(() => {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10)

//       minutes = minutes < 10 ? "0" + minutes : minutes
//       seconds = seconds < 10 ? "0" + seconds : seconds

//       setTime(`${minutes}:${seconds}`)

//       if (--timer < 0) {
//         clearInterval(countdown)
//       }
//     }, 1000)
//   }

//   return (
//     <>
//       <div>
//         <button>Return</button>
//         <button>Reset</button>
//       </div>
//       <h1>{props.name}</h1>
//       <h2>{time}</h2>
//       <button onClick={() => startTimer(timeInt)}>Start the clock</button>
//     </>
//   )
// }

export default Timer
