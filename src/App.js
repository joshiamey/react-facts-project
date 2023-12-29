import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/main";

export default function App() {
    const [renderMode,setRenderMode] = React.useState(false);

    function toggle() {
        console.log("Toggling to mode: ",renderMode ? "Light" : "Dark");
        setRenderMode(prevMode => !prevMode)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={renderMode}
                toggleDarkMode={toggle}
            />
            <Main darkMode={renderMode}/>
        </div>
    );
};