import React, { useState, useCallback, useMemo } from "react";
import CallBackChildren from "./CallBackChildren.jsx";

const CallBackExample = () => {
    const [count, setCount] = useState(0);
    const [fruits, setFruits] = useState([0]);

    const callBack = useCallback(() => {
        setFruits([...fruits, fruits.length + 1]);
    }, []);

    return (
        <>
            <p>{count}</p>
            <CallBackChildren fruits={fruits} callBack={callBack} />
            <button onClick={() => setCount(count + 1)}> Increment</button>
        </>
    );
};
export default CallBackExample;
