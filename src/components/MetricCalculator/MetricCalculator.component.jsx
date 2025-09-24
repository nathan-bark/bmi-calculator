import React, { useState } from "react";

const MetricCalculator = ({ setHeight, setWeight }) => {
  const [metricHeight, setMetricHeight] = useState(0);
  const [metricWeight, setMetricWeight] = useState(0);

  const handleHeightChange = (event) => {
    let value = event.target.value;
    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }

    const cmToM = Number(value) / 100;
    setMetricHeight(value);
    setHeight(cmToM);
  };
  const handleWeightChange = (event) => {
    let value = event.target.value;

    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }
    setMetricWeight(value);
    setWeight(value);
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="height">Height</label>
        <input
          type="number"
          required
          id="height"
          name="height"
          onChange={handleHeightChange}
          value={metricHeight}
        />

        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          required
          id="weight"
          name="weight"
          onChange={handleWeightChange}
          value={metricWeight}
        />
      </fieldset>
    </div>
  );
};

export default MetricCalculator;
