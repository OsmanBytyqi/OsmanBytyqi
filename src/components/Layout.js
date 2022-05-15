import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
    export default function Layout({children}) {
    return (
        <div className="layout">
    <Navbar/>
    <div className="content">
        {children}
    </div>
    <footer>
        <p>Copy Right 2022 Osman Bytyqi </p>
    </footer>
        </div>
    )
}
