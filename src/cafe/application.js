import React, { Component, useEffect, useState } from 'react';
import Cart from './cart';
import Home from './home';
import Navbar from './navbar';

// const navbarAPiUrl = window.location.origin +  "/navbar.json"

function Application() {

    // const [navbarData, setnavbarData] = useState();

    // const getData=()=>{
    //     fetch(navbarAPiUrl)
    //       .then( res => res.json())
    //       .then( navJson => {
    //         setnavbarData(navJson);
    //       });
    // }
    // getData()

    useEffect(() => {
        
    }, []);

    return ( 
        <React.Fragment>
            <Navbar/>
            <Cart />
            <Home />
        </React.Fragment>
     );
}

export default Application;