import ExerciseLifts from "./ExerciseLifts.js";
import "./Exercise.css";

const Exercise = (props) => {
  return (
    <div className="exercise_row">
      <div className="exercise_label">{props.name}</div>
      <ExerciseLifts
        routine={props.routine}
        week={props.week}
        weight={props.weight}
      />
    </div>
  );
};

export default Exercise;
