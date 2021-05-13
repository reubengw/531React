import "./ExerciseLifts.css";

const ExerciseLifts = ({ routine, week, weight }) => {
  return (
    <div className="exercise_lifts">
      {weight !== 0 && (
        <div>
          {2.5 *
            Math.floor(
              (routine[`week${week}`].set1.percentage * weight) / 2.5
            ) +
            "x"}
          {routine[`week${week}`].set1.reps + "   "}
          {2.5 *
            Math.floor(
              (routine[`week${week}`].set2.percentage * weight) / 2.5
            ) +
            "x"}
          {routine[`week${week}`].set2.reps + "   "}
          {2.5 *
            Math.floor(
              (routine[`week${week}`].set3.percentage * weight) / 2.5
            ) +
            "x"}
          {routine[`week${week}`].set3.reps + "   "}
        </div>
      )}
    </div>
  );
};

export default ExerciseLifts;
