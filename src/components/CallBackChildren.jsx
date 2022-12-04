import React from "react";

const CallBackChildren = ({ fruits, callBack }) => {
    console.log("I am rendered");
    return (
        <>
            <p>{fruits.length}</p>
            <button onClick={() => callBack()}> add</button>
        </>
    );
};
export default React.memo(CallBackChildren);
