import React, { useState, useEffect } from "react";

import MetricCalculator from "../MetricCalculator/MetricCalculator.component";
import ImperialCalculator from "../ImperialCalculator/ImperialCalculator.component";

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

  const ImperialBMI = (heightInput, weightInput) => {
    const bmi = 703 * (weightInput / (heightInput * heightInput));
    return bmi.toFixed(1);
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
  }

  const remainderPounds = (pounds) => {
        const newPounds = pounds % 14;
        return newPounds.toFixed(0);    
  }

  useEffect(() => {
    if (system === "imperial") {
      ImperialWeightRange(height);
    } else {
      metricWeightRange(height);
    }
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

      {system === "metric" ? (
        <MetricCalculator setHeight={setHeight} setWeight={setWeight} />
      ) : (
        <ImperialCalculator setHeight={setHeight} setWeight={setWeight} />
      )}

      <p>your BMI is{ImperialBMI(height, weight)}</p>

      <p>
        Your ideal weight is between {poundsToStones(minWeight)}St {remainderPounds(minWeight)}Lbs and {poundsToStones(maxWeight)}St {remainderPounds(maxWeight)}Lbs
      </p>
    </div>

    // display metirc form or imperial form based on system variable
  );
};

export default CalculatorForm;
