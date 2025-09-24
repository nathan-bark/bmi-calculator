import React, { useEffect, useState } from "react";

const ImperialCalculator = ({ setHeight, setWeight }) => {
  const [feet, setFeet] = useState(0);
  const [feetToInches, setFeetToInches] = useState(0);
  const [inches, setInches] = useState(0);
  const [inchValue, setInchValue] = useState(0);
  const [stones, setStones] = useState(0);
  const [stonesToPounds, setStonesToPounds] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [poundValue, setPoundValue] = useState(0);

  const handleFeetChange = (event) => {
    let value = event.target.value;

    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }
    const newInches = event.target.value * 12;
    setFeetToInches(Number(newInches));
    setFeet(value);
  };

  const handleInchesChange = (event) => {
    let value = event.target.value;

    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }
    setInches(Number(value));
    setInchValue(value);
  };

  const handleStonesChange = (event) => {
    let value = event.target.value;
    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }

    const newStones = value * 14;
    setStones(Number(newStones));
    setStonesToPounds(value);
  };

  const handlePoundsChange = (event) => {
    let value = event.target.value;
    if (value.length > 1 && value.startsWith("0")) {
      value = value.substring(1);
    }
    setPounds(Number(value));
    setPoundValue(value);
  };

  const heightWeightSetter = () => {
    const totalInches = feetToInches + inches;
    const totalPounds = stones + pounds;

    setHeight(totalInches);
    setWeight(totalPounds);
  };

  useEffect(() => {
    heightWeightSetter();
  }, [feet, inches, stones, pounds,]);

  return (
    <div>
      <fieldset>
        <label htmlFor="heightFt">Height</label>
        <div className="relative inline-block">
          <input
            type="number"
            id="heightFt"
            name="heightFt"
            required
            onChange={handleFeetChange}
            value={feet}
            className="w-50 rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            ft
          </span>
        </div>
        <div className="relative inline-block">
          <input
            type="number"
            id="heightIn"
            name="heightIn"
            required
            onChange={handleInchesChange}
            value={inchValue}
            className="w-50 rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            in
          </span>
        </div>

        <label htmlFor="weightSt">Weight</label>
        <div className="relative inline-block">
          <input
            type="number"
            id="weightSt"
            name="weightSt"
            required
            onChange={handleStonesChange}
            value={stonesToPounds}
            className="w-50 rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            st
          </span>
        </div>
        <div className="relative inline-block">
          <input
            type="number"
            id="weightLbs"
            name="weightLbs"
            required
            onChange={handlePoundsChange}
            value={poundValue}
            className="w-50 rounded-md border border-gray-300 px-3 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
            lbs
          </span>
        </div>
      </fieldset>
    </div>
  );
};

export default ImperialCalculator;
