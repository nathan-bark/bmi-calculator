import React from "react";

const WelcomeMessage = ({
  isBMIValid,
  system,
  formattedBMI,
  bodyMassIndex,
  minWeight,
  maxWeight,
  poundsToStones,
  remainderPounds,
}) => {
  return (
    <div>
      {isBMIValid ? (
        system === "metric" ? (
          <div className="bg-blue-navy text-white text-left p-8 mt-6 rounded-2xl">
            <p className="text-preset-6 mb-6">Your BMI is... <span className="text-preset-2">{bodyMassIndex}</span></p>{" "}
            <p className="text-preset-7">
              {" "}
              Your BMI suggests you are{" "}
              {formattedBMI > 30
                ? "obese"
                : formattedBMI > 25
                ? "overweight"
                : formattedBMI > 18.5
                ? "a healthy weight"
                : "underweight"}
              . Your ideal weight is between <span className="font-bold">{minWeight}kgs - {maxWeight}kgs</span>
            </p>
          </div>
        ) : (
          <div>
            <p>Your BMI is... {bodyMassIndex}</p>
            <p>
              {" "}
              Your BMI suggests you are{" "}
              {formattedBMI > 30
                ? "obese"
                : formattedBMI > 25
                ? "overweight"
                : formattedBMI > 18.5
                ? "a healthy weight"
                : "underweight"}
              . Your ideal weight is between {poundsToStones(minWeight)} stone{" "}
              {remainderPounds(minWeight)}lbs and {poundsToStones(maxWeight)}{" "}
              stone {remainderPounds(maxWeight)}
              lbs
            </p>
          </div>
        )
      ) : (
        <div>
          <h3>Welcome!</h3>
          <p>
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;
