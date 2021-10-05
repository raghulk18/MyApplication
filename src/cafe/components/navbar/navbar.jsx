import React, { useEffect, useState } from 'react';
import "./navbar.scss";

const logoUrl = window.location.origin + "/images/logo.svg"; 
const navbarAPiUrl = "/json/navbar.json"

function Navbar(props) {

    const [navbarData, setnavbarData] = useState();
    
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
                    <img src={logoUrl} alt={'logoUrl'}/>
                </a>
            </div>
     
            <div className="navigation-menu">
                { navbarData && navbarData.map(nav => (
                    <a className="menu-link" key={nav.id} href={nav.url}>{nav.text}</a>
                ))
                }

            </div>
        </div>
     );
}

export default Navbar;