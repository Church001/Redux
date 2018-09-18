import React from 'react';

import './CounterOutput.css';

const CounterOutput = (props) => (
    <div className="CounterOutput">
        Current Counter: {props.value}
    </div>
);

export default CounterOutput;