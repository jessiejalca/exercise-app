import "./ExerciseBtn.css"
import Timer from "../timer/Timer"
import { Link } from "react-router-dom"

const ExerciseBtn = (props) => {
  return (
    <>
      <Link to="/timer">
        <div className="exercise-btn">
          <h3 className="exercise-name">Run</h3>
          <p className="exercise-info">20 min</p>
        </div>
      </Link>
    </>
  )
}

export default ExerciseBtn
