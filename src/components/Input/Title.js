import "./Title.css";

const Title = (props) => {
  return (
    <div className="exercise_inputs_title">
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
