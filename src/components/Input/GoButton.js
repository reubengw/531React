import "./GoButton.css";

const GoButton = ({ name, setCurrentOneRepMax, oneRepMax }) => {
  const goButtonClickedHandler = () => {
    setCurrentOneRepMax(oneRepMax);
  };
  return (
    <button className="go_button" onClick={goButtonClickedHandler}>
      {name}
    </button>
  );
};
export default GoButton;
