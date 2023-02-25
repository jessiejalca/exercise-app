import ExerciseBtn from "../ExerciseBtn/ExerciseBtn"

const Menu = () => {
  return (
    <>
      <h1>Today's Workout</h1>
      <section>
        <h2>Warm-Up</h2>
        <ExerciseBtn name="Run" type="timer" duration="20" />
      </section>
      <section>
        <h2>3 Rounds</h2>
        <ExerciseBtn name="Push Ups" type="counter" reps="20" />
        <ExerciseBtn name="Plank" type="timer" duration="1" />
      </section>
    </>
  )
}

export default Menu
