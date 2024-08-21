import React, {useState} from 'react';
import UnitSelector from "./UnitSelector";

function Converter() {
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState('meters');
    const [toUnit, setToUnit] = useState('kilometers');
    const [result, setResult] = useState(null);

    const units = ['meters', 'kilometers', 'miles', 'feet'];

    const conversionRates = {
        meters: {
            kilometers: 0.001,
            miles: 0.000621371,
            feet: 3.28084
        },
        kilometers: {
            meters: 1000,
            miles: 0.621371,
            feet: 3280.84
        },
        miles: {
            kilometers: 1609.34,
            miles: 1.60934,
            feet: 5280
        },
        feet: {
            kilometers: 0.3048,
            miles: 0.0003048,
            feet: 0.000189394
        },
    };

    const handleConvert = () => {
        if (!inputValue || isNaN(inputValue)) {
            setResult('Please enter a valid number');
            return;
        }
        const rate = conversionRates[fromUnit][toUnit];
        const convertedValue = inputValue * rate;
        setResult(`${inputValue} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`);
    };

    return (
        <div className="converter">
            <h2>unit Converter</h2>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Value"
            />
            <div>
                <UnitSelector
                    units={units}
                    selectedUnit={fromUnit}
                    onChanges={setFromUnit}
                />
                <span> to </span>
                <UnitSelector units={units} selectedUnit={toUnit} onChanges={setToUnit}/>
            </div>
            <button onClick={handleConvert}>Convert</button>
            {result && <p>{result}</p>}
        </div>
    );
}

export default Converter;