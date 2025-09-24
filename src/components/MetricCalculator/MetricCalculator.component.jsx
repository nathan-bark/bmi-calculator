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
        <div className="relative inline-block">
          <input
            type="number"
            required
            id="height"
            name="height"
            onChange={handleHeightChange}
            value={metricHeight}
            className="w-50 rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            cm
          </span>
        </div>

        <label htmlFor="weight">Weight</label>
        <div className="relative inline-block">
          <input
            type="number"
            required
            id="weight"
            name="weight"
            onChange={handleWeightChange}
            value={metricWeight}
            className="w-50 rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            kg
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default MetricCalculator;
