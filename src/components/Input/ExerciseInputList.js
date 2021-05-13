import ExerciseInput from "./ExerciseInput";
import ExerciseInputs from "./ExerciseInputs";
import "./ExerciseInputList.css";

const ExerciseInputList = ({ setOneRepMax, oneRepMax }) => {
  return (
    <div className="exercise_inputs_list">
      <ExerciseInput
        classname="exercise_input"
        title="Bench"
        setOneRepMax={setOneRepMax}
        oneRepMax={oneRepMax}
      />
      <ExerciseInput
        classname="exercise_input"
        title="OHP"
        setOneRepMax={setOneRepMax}
        oneRepMax={oneRepMax}
      />
      <ExerciseInput
        classname="exercise_input"
        title="Squat"
        setOneRepMax={setOneRepMax}
        oneRepMax={oneRepMax}
      />
      <ExerciseInput
        classname="exercise_input"
        title="Deadlift"
        setOneRepMax={setOneRepMax}
        oneRepMax={oneRepMax}
      />
    </div>
  );
};

export default ExerciseInputList;
