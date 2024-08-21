import React from 'react';

function UnitSelector({units, selectedUnit, onChanges}) {
    return (
        <select value={selectedUnit} onChange={(e) => onChanges(e.target.value)}>
            {units.map((unit) => (
                <option key={unit} value={unit}>
                    {unit}
                </option>
            ))}
        </select>
    )
}

export default UnitSelector;