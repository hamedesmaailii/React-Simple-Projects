import React from 'react';

const Filter = ({setFilter}) => {
    return (
        <select onChange={e => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
    );
};

export default Filter;