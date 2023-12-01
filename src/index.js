import React from 'react';
import ReactDOM from 'react-dom/client';
import myimg from '../logo/react-logo.png';
import "./style.css";

function Image() {
    return <img className="nav-logo" src={myimg} alt="logo"  />
}

function Header() {
    return ( 
    <header>
        <nav className="nav-bar">
            <Image />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>);
}

function Footer() {
    return (
        <footer>
            <small>"© 2023 Amjoe development. All rights reserved."</small>
        </footer>
    )
}

function Body() {
    return (
        <>
            <h1>Reasons I am excited about React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </>
    );
}
    
function Page() {
    return(
       <div>
           <Header />
           <Body />
           <Footer />
       </div>
       );
   };

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)