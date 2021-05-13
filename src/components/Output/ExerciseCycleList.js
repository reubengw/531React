import ExerciseCycle from "./ExerciseCycle.js";
import "./ExerciseCycleList.css";

const ExerciseCycleList = ({ currentOneRepMax }) => {
  return (
    <div className="exercise_cycle">
      <ExerciseCycle
        week={1}
        currentOneRepMax={currentOneRepMax}
      ></ExerciseCycle>
      <ExerciseCycle
        week={2}
        currentOneRepMax={currentOneRepMax}
      ></ExerciseCycle>
      <ExerciseCycle
        week={3}
        currentOneRepMax={currentOneRepMax}
      ></ExerciseCycle>
      <ExerciseCycle
        week={4}
        currentOneRepMax={currentOneRepMax}
      ></ExerciseCycle>
    </div>
  );
};

export default ExerciseCycleList;
