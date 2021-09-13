import React, { useState } from 'react'

function HookCounterTwo() {
    const initialcount = 0
    const [count, setCount] = useState(initialcount)
    const incbyfive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialcount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={incbyfive}>+5</button>
        </div>
    )
}

export default HookCounterTwo
