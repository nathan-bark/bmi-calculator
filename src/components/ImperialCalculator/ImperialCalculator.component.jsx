import React, { useEffect, useState} from "react";

const ImperialCalculator = ({ setHeight, setWeight}) => {
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);
    const [stones, setStones] = useState(0);
    const [pounds, setPounds] = useState(0);

    const handleFeetChange = (event) => {
        const newInches = event.target.value * 12
        setFeet(Number(newInches));
    }

    const handleInchesChange = (event) => {
        const newInches = event.target.value;
        setInches(Number(newInches));
    }

    const handleStonesChange = (event) => {
        const newStones = event.target.value * 14;
        setStones(Number(newStones));
    }

    const handlePoundsChange = (event) => {
        const newPounds = event.target.value;
        setPounds(Number(newPounds));
    }

    const heightWeightSetter = () => {
        const totalInches = feet + inches;
        const totalPounds = stones + pounds;
        
        setHeight(totalInches);
        setWeight(totalPounds);
    };

    useEffect(() => {
        heightWeightSetter();
    }, [feet, inches, stones, pounds]);



    
return (
    <div>
        <fieldset>
            <label htmlFor="heightFt">Height</label>
            <input type="number" id="heightFt" name="heightFt" required onChange={handleFeetChange} />
            <input type="number" id="heightIn" name="heightIn" required onChange={handleInchesChange} />

            <label htmlFor="weightSt">Weight</label>
            <input type="number" id="weightSt" name="weightSt" required onChange={handleStonesChange}/>
            <input type="number" id="weightLbs" name="weightLbs" required onChange={handlePoundsChange} />
        </fieldset>
    </div>
);
}

export default ImperialCalculator;