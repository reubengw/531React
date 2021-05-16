import "./ExerciseInput.css";

const ExerciseInput = ({ title, setOneRepMax, oneRepMax }) => {
  const changeHandler = (event) => {
    setOneRepMax({ ...oneRepMax, [title]: event.target.value });
  };
  return (
    <div className="exercise_input_container">
      <label className="exercise_input_title">{title}</label>
      <input
        inputmode="decimal"
        type="number"
        pattern="[0-9]"
        onChange={changeHandler}
        className="exercise_input_field"
      ></input>
    </div>
  );
};

export default ExerciseInput;
