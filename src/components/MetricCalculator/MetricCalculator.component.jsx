import React from "react";

const MetricCalculator = ({  setHeight, setWeight }) => {
  const handleHeightChange = (event) => {
    const cmToM = event.target.value / 100;
    setHeight(Number(cmToM));
  };
  const handleWeightChange = (event) => {
    setWeight(Number(event.target.value));
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
        />

        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          required
          id="weight"
          name="weight"
          onChange={handleWeightChange}
        />
      </fieldset>
    </div>
  );
};

export default MetricCalculator;
