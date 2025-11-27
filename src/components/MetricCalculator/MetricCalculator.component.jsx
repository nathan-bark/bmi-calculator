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
      <fieldset className="flex flex-col">
        <label
          htmlFor="height"
          className="text-preset-7 text-gray-dark self-start mb-2"
        >
          Height
        </label>
        <div className="relative inline-block">
          <input
            type="number"
            required
            id="height"
            name="height"
            onChange={handleHeightChange}
            value={metricHeight}
            className="w-full rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-preset-4 text-blue-dark"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-navy pointer-events-none text-preset-4">
            cm
          </span>
        </div>

        <label
          htmlFor="weight"
          className="text-preset-7 text-gray-dark self-start mb-2 mt-4"
        >
          Weight
        </label>
        <div className="relative inline-block">
          <input
            type="number"
            required
            id="weight"
            name="weight"
            onChange={handleWeightChange}
            value={metricWeight}
            className="w-full rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-preset-4 text-blue-dark"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-navy text-preset-4 pointer-events-none">
            kg
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default MetricCalculator;
