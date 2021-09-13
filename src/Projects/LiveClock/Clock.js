import React, { useState } from 'react';

function Clock() {
    const [count, setCount] = useState(5)
    function deccount() {
        setCount(count - 1)
    }
    function inccount() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Clock</h1>
            <button onClick={deccount}>-</button>
            <span>{count}:</span>
            <span>{count}:</span>
            <span>{count}</span>
            <button onClick={inccount}>+</button>
        </div>
    )
}

export default Clock
