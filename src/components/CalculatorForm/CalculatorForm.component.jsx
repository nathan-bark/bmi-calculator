import React, { useState, useEffect } from "react";

import MetricCalculator from "../MetricCalculator/MetricCalculator.component";
import ImperialCalculator from "../ImperialCalculator/ImperialCalculator.component";

const CalculatorForm = () => {
  const [system, setSystem] = useState("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bodyMassIndex, setBodyMassIndex] = useState(0);
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const isBMIValid = !isNaN(bodyMassIndex) && bodyMassIndex > 10;

  const handleSystemChange = (event) => {
    setSystem(event.target.value);
  };

  const metricBMI = (heightInput, weightInput) => {
    const bmi = weightInput / (heightInput * heightInput);

    setBodyMassIndex(Number(bmi.toFixed(1)));
  };

  const metricWeightRange = (rangeHeight) => {
    const lowerWeight = 18.5 * (rangeHeight * rangeHeight);
    const upperWeight = 24.9 * (rangeHeight * rangeHeight);

    setMinWeight(lowerWeight.toFixed(1));
    setMaxWeight(upperWeight.toFixed(1));
  };

  const imperialBMI = (heightInput, weightInput) => {
    const bmi = 703 * (weightInput / (heightInput * heightInput));
    setBodyMassIndex(Number(bmi.toFixed(1)));
  };

  const ImperialWeightRange = (rangeHeight) => {
    const heightToNum = Number(rangeHeight);
    const lowerWeight = (18.5 * (heightToNum * heightToNum)) / 703;
    const upperWeight = (24.9 * (heightToNum * heightToNum)) / 703;

    setMinWeight(lowerWeight.toFixed(1));
    setMaxWeight(upperWeight.toFixed(1));
  };

  const poundsToStones = (pounds) => {
    return Math.floor(pounds / 14);
  };

  const remainderPounds = (pounds) => {
    const newPounds = pounds % 14;
    return newPounds.toFixed(0);
  };

  useEffect(() => {
    if (system === "imperial") {
      imperialBMI(height, weight);
      ImperialWeightRange(height);
    } else {
      metricBMI(height, weight);
      metricWeightRange(height);
    }
  }, [height, weight, system]);

  return (
    <div>
      <h2>Enter yourdetails below</h2>
      <fieldset>
        <input
          type="radio"
          name="system"
          value="metric"
          id="metric"
          checked={system === "metric"}
          onChange={handleSystemChange}
        />
        <label htmlFor="metric">Metric</label>
        <input
          type="radio"
          name="system"
          value="imperial"
          id="imperial"
          checked={system === "imperial"}
          onChange={handleSystemChange}
        />
        <label htmlFor="imperial">Imperial</label>
      </fieldset>

      {system === "metric" ? (
        <MetricCalculator setHeight={setHeight} setWeight={setWeight} />
      ) : (
        <ImperialCalculator setHeight={setHeight} setWeight={setWeight} />
      )}

      {isBMIValid ? (
        system === "metric" ? (
          <p>
            Your BMI is {bodyMassIndex} and your ideal weight is between{" "}
            {minWeight}kg and {maxWeight}kg
          </p>
        ) : (
          <p>
            Your BMI is {bodyMassIndex} and your ideal weight is between{" "}
            {poundsToStones(minWeight)} stone {remainderPounds(minWeight)}lbs
            and {poundsToStones(maxWeight)} stone {remainderPounds(maxWeight)}
            lbs
          </p>
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

export default CalculatorForm;
