import React from 'react'

function Navbar({onChangeMode = ()=>{}}) {
    return (
        <div className="navbar">
            <ul className="navList">
            <li><img src="../assets/images/sample-logo.jpg" alt="404" className="link left logo" /></li>
            <li><h3 className="title left">Annai Abirami Chitfunds</h3></li>
            <li><button className="link right" onClick={()=>onChangeMode("c")}>Contact Us</button></li>
            <li><button className="link right" onClick={()=>onChangeMode("a")}>About us</button></li>
            <li><button className="link right" onClick={()=>onChangeMode("cs")}>Chits and Schemes</button></li>
            <li><button className="link right" onClick={()=>onChangeMode("h")}>Home</button></li>
            </ul>
            
        </div>
    )
}

export default Navbar
