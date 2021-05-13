import "./Panel.css";
import ExerciseInputs from "./Input/ExerciseInputs.js";
import ExerciseOutputs from "./Output/ExerciseOutputs.js";
import GoButton from "./Input/GoButton.js";
import { useState } from "react";

const Panel = (props) => {
  const [oneRepMax, setOneRepMax] = useState({
    Bench: 0,
    OHP: 0,
    Squat: 0,
    Deadlift: 0,
  });
  const [currentOneRepMax, setCurrentOneRepMax] = useState({
    Bench: 107.5,
    OHP: 67.5,
    Squat: 140,
    Deadlift: 165,
  });

  return (
    <div className="panel">
      <ExerciseInputs
        className="exercise_inputs"
        setOneRepMax={setOneRepMax}
        oneRepMax={oneRepMax}
      />
      <GoButton
        name="Go!"
        setCurrentOneRepMax={setCurrentOneRepMax}
        oneRepMax={oneRepMax}
      />
      <ExerciseOutputs
        className="exercise_outputs"
        currentOneRepMax={currentOneRepMax}
      />
    </div>
  );
};
export default Panel;
