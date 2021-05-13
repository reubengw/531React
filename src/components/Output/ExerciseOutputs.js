import "./ExerciseOutputs.css";
import ExerciseCycleList from "./ExerciseCycleList.js";

const ExerciseOutputs = ({ currentOneRepMax }) => {
  return (
    <div className="exercise_outputs">
      <ExerciseCycleList currentOneRepMax={currentOneRepMax} />
    </div>
  );
};
export default ExerciseOutputs;
