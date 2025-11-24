import React, { useState, useEffect } from "react";

import MetricCalculator from "../MetricCalculator/MetricCalculator.component";
import ImperialCalculator from "../ImperialCalculator/ImperialCalculator.component";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage.component";

import logo from "../../assets/images/logo.svg";

const CalculatorForm = () => {
  const [system, setSystem] = useState("metric");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bodyMassIndex, setBodyMassIndex] = useState("0.0");
  const [formattedBMI, setFormattedBMI] = useState(0);
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const isBMIValid =
    !isNaN(bodyMassIndex) &&
    bodyMassIndex > 10 &&
    Number.isFinite(formattedBMI);

  const handleSystemChange = (event) => {
    setSystem(event.target.value);
  };

  const metricBMI = (heightInput, weightInput) => {
    const bmi = weightInput / (heightInput * heightInput);

    setFormattedBMI(Number(bmi.toFixed(1)));
    setBodyMassIndex(bmi.toFixed(1));
  };

  const metricWeightRange = (rangeHeight) => {
    const lowerWeight = 18.5 * (rangeHeight * rangeHeight);
    const upperWeight = 24.9 * (rangeHeight * rangeHeight);

    setMinWeight(lowerWeight.toFixed(1));
    setMaxWeight(upperWeight.toFixed(1));
  };

  const imperialBMI = (heightInput, weightInput) => {
    const bmi = 703 * (weightInput / (heightInput * heightInput));
    setFormattedBMI(Number(bmi.toFixed(1)));
    setBodyMassIndex(bmi.toFixed(1));
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
    <div className="flex flex-col justify-center items-center text-center pt-8 px-6 bg-linear-to-r from-gradient-start to-gradient-end">
      <img src={logo} alt="logo" className="h-10 w-10 mb-8" />
      <h1 className="font-inter-semi text-preset-2 text-blue-dark mb-6">
        Body Mass Index Calculator
      </h1>
      <p className="font-inter text-preset-6 text-gray-dark mb-8">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>

      <fieldset className="bg-white rounded-2xl p-6">
        <h2 className="font-inter-semi text-preset-4 text-blue-dark">
          Enter your details below
        </h2>
        <div className="my-6 flex flex-row justify-center items-center">
          <input
            type="radio"
            name="system"
            value="metric"
            id="metric"
            checked={system === "metric"}
            onChange={handleSystemChange}
            className="w-[31px] h-[31px] rounded-3xl "
          />
          <label
            htmlFor="metric"
            className="font-inter-semi text-preset-6 text-blue-dark mr-6 ml-4"
          >
            Metric
          </label>
          <input
            type="radio"
            name="system"
            value="imperial"
            id="imperial"
            checked={system === "imperial"}
            onChange={handleSystemChange}
            className=" w-[31px] h-[31px]"
          />
          <label
            htmlFor="imperial"
            className="font-inter-semi text-preset-6 text-blue-dark ml-4"
          >
            Imperial
          </label>
        </div>

        {system === "metric" ? (
          <MetricCalculator setHeight={setHeight} setWeight={setWeight} />
        ) : (
          <ImperialCalculator setHeight={setHeight} setWeight={setWeight} />
        )}

        <WelcomeMessage
          isBMIValid={isBMIValid}
          system={system}
          bodyMassIndex={bodyMassIndex}
          formattedBMI={formattedBMI}
          minWeight={minWeight}
          maxWeight={maxWeight}
          remainderPounds={remainderPounds}
          poundsToStones={poundsToStones}
        />
      </fieldset>
    </div>
  );
};

export default CalculatorForm;
