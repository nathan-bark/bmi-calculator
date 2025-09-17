import React, { useState, useEffect } from "react";

import MetricCalculator from "../MetricCalculator/MetricCalculator";

const CalculatorForm = () => {
  const [system, setSystem] = useState("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const handleSystemChange = (event) => {
    setSystem(event.target.value);
  };

  const metricBMI = (heightInput, weightInput) => {
    const bmi = weightInput / (heightInput * heightInput);

    return Number(bmi.toFixed(1));
  };

  const metricWeightRange = (rangeHeight) => {
    const lowerWeight = 18.5 * (rangeHeight * rangeHeight);
    const upperWeight = 24.9 * (rangeHeight * rangeHeight);

    setMinWeight(lowerWeight.toFixed(1));
    setMaxWeight(upperWeight.toFixed(1));
  };

  useEffect(() => {
    metricWeightRange(height);
  }, [height]);

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

      {system === "metric" && (
        <MetricCalculator setHeight={setHeight} setWeight={setWeight} />
      )}

      <p>your BMI is{metricBMI(height, weight)}</p>

      <p>
        Your ideal weight is between {minWeight}kg and {maxWeight}kg
      </p>
    </div>

    // display metirc form or imperial form based on system variable
  );
};

export default CalculatorForm;
