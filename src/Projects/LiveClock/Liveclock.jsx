import React, { useState } from 'react'

function Liveclock() {

    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000);
    //<button className="lbutton" onClick={UpdateTime}>get time</button>
    return (
        <div>
            <h1>{ctime}</h1>

        </div>
    )
}

export default Liveclock
