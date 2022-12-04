import React, { useReducer, useContext } from "react";
import UserContext from "./Context.jsx";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from "./store.js";

const ReducerExample = (props) => {
    const reducer = (state, action) => {
        console.log(action);
        switch (action.type) {
            case "Change Color": {
                return {
                    ...state,
                    features: {
                        ...state.features,
                        color: action.color,
                    },
                };
            }
            default: {
            }
        }
    };

    const user = useContext(UserContext);
    const [obj, dispatch] = useReducer(reducer, {
        name: "gun",
        features: { height: 5.9, color: "desi" },
    });
    console.log("inside reducer ");

    // const [obj1,setObj1]=useState({
    //     name: "gun",
    //     features: { height: 5.9, color: "desi" },
    // })

    // const handleChange=()=>{
    //     setObj1({
    //         ...obj1,
    //         features: {
    //             ...obj1.features,
    //             color: 'red',
    //         },
    //     })
    // }
    return (
        <>
            <p>{user[0]}</p>
            <p>{props.counter.num}</p>
            <p>{obj.features.color}</p>
            <button
                onClick={() =>
                    // dispatch({ type: "Change Color", color: "fair" })
                    {
                        // props.increase();
                        user[1]();
                    }
                }
            >
                Change Color
            </button>
        </>
    );
};
const mapStateToProps = (state, ownProps) => {
    return {
        counter: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return { increase: () => dispatch(incrementCount()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReducerExample);
