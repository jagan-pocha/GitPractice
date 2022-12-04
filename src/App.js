import { useState } from "react";
import "./App.css";
import CallBackExample from "./components/CallBackExample.jsx";
import UserContext from "./components/Context.jsx";
import ReducerExample from "./components/ReducerExample.jsx";

import { Provider } from "react-redux";
import store from "./components/store";
import Label from "./components/StylePropsComp.jsx";

function App() {
    const [developer, setDeveloper] = useState("Jagan");
    function handleChange() {
        setDeveloper(Math.random());
    }
    return (
        <Provider store={store}>
            <UserContext.Provider value={[developer, handleChange]}>
                <div className="App">
                    {/* <ReducerExample abc={"123"} /> */}
                    {/* <CallBackExample /> */}
                    <Label value="jagan" color="red" />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

export default App;
