import Title from "./Title.js";
import ExerciseInputList from "./ExerciseInputList";
import "./ExerciseInputs.css";

const ExerciseInputs = ({ setOneRepMax, oneRepMax }) => {
  return (
    <div className="exercise_inputs_container">
      <Title title="531 Programming" />
      <ExerciseInputList setOneRepMax={setOneRepMax} oneRepMax={oneRepMax} />
    </div>
  );
};

export default ExerciseInputs;
