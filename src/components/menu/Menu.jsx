import ExerciseBtn from "../ExerciseBtn/ExerciseBtn"

const Menu = () => {
  return (
    <>
      <h1>Today's Workout</h1>
      <section>
        <h2>Warm-Up</h2>
        <ExerciseBtn type="timer" />
      </section>
      <section>
        <h2>3 Rounds</h2>
      </section>
    </>
  )
}

export default Menu