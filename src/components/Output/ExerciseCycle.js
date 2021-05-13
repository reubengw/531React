import Exercise from "./Exercise.js";
import "./ExerciseCycle.css";

const ExerciseCycle = ({ week, currentOneRepMax }) => {
  return (
    <div className="exercise_cycle">
      <div className="cycle_title">Week {week}</div>
      <Exercise
        className="exercise"
        name="Bench"
        routine={routine}
        week={week}
        weight={currentOneRepMax.Bench * 0.9}
      ></Exercise>
      <Exercise
        name="Squat"
        routine={routine}
        week={week}
        weight={currentOneRepMax.Squat * 0.9}
      ></Exercise>
      <Exercise
        name="Deadlift"
        routine={routine}
        week={week}
        weight={currentOneRepMax.Deadlift * 0.9}
      ></Exercise>
      <Exercise
        name="OHP"
        routine={routine}
        week={week}
        weight={currentOneRepMax.OHP * 0.9}
      ></Exercise>
    </div>
  );
};

const routine = {
  week1: {
    set1: { percentage: 0.65, reps: "5" },
    set2: { percentage: 0.75, reps: "5" },
    set3: { percentage: 0.85, reps: "5+" },
  },
  week2: {
    set1: { percentage: 0.7, reps: "3" },
    set2: { percentage: 0.8, reps: "3" },
    set3: { percentage: 0.9, reps: "3+" },
  },
  week3: {
    set1: { percentage: 0.75, reps: "5" },
    set2: { percentage: 0.85, reps: "3" },
    set3: { percentage: 0.95, reps: "1+" },
  },
  week4: {
    set1: { percentage: 0.4, reps: "5" },
    set2: { percentage: 0.5, reps: "5" },
    set3: { percentage: 0.6, reps: "5" },
  },
};

export default ExerciseCycle;
