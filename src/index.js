import React from 'react';
import ReactDOM from 'react-dom/client';
import myimg from '../logo/react-logo.png'

function Image() {
    return <img src={myimg} alt="logo" width="40px" />
}

function Page() {
     return(
        <div>
            <Image />
            <h1>Fun Facts About React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was Originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        );
    };

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)