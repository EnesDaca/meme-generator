import React from "react"
import logo from "./images/troll-face.png"

export default function Header() {
    return (
        <nav>
            <div className="logo">
            <img src={logo} alt="meme-logo"/>
            <h1>Meme Generator</h1>
            </div>
            <h3>Create your meme</h3>
        </nav>
    )
}