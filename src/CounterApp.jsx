import { PropTypes } from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
