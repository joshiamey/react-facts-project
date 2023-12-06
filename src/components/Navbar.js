import React from 'react'
import reactIconImg from '../../logo/reactjs-icon.png'

export default function Navbar() {
    return (
        <nav class="navbar">
            <img class="react-icon" src={reactIconImg} alt="React-icon"></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}