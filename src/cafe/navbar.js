import React, { Component, useEffect, useState } from 'react';
import "./navbar.scss";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const logoUrl = window.location.origin + "/images/logo.svg"; 
const navbarAPiUrl = "/navbar.json"

function Navbar(props) {

    const [navbarData, setnavbarData] = useState();
    // const [linkData, setlinkData] = useState(props);
    
    const getData=()=>{
        fetch(navbarAPiUrl)
          .then( res => res.json())
          .then( navJson => {
            setnavbarData(navJson);
          });
    }

    useEffect(() => {
        getData()
    }, []);

    return ( 
        <div className="navbar-left-container">
            <div className="logo">
                <a href="/" className="logo-container" aria-label="home">
                    <img src={logoUrl}/>
                </a>
            </div>
     
            <div className="navigation-menu">
                { navbarData && navbarData.map(nav => (
                    <a className="menu-link" key={nav.id} href={nav.path}>{nav.text}</a>
                ))}

            </div>
        </div>
     );
}

export default Navbar;