import "./ExerciseBtn.css"
import { Link } from "react-router-dom"

const ExerciseBtn = (props) => {
  const renderExerciseInfo = () => {
    if (props.type === "timer") {
      return <p className="exercise-info">{props.duration} min</p>
    } else if (props.type === "counter") {
      return <p className="exercise-info">{props.reps} reps</p>
    }
  }
  return (
    <>
      <Link to={`/${props.type}`} state={"hello"}>
        <div className="exercise-btn">
          <h3 className="exercise-name">{props.name}</h3>
          {renderExerciseInfo()}
        </div>
      </Link>
    </>
  )
}

export default ExerciseBtn
