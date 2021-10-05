import React, { Component } from 'react';
import Cart from './cart';
import Home from './home';
import Navbar from './navbar-left';

function Application() {
    return ( 
        <React.Fragment>
            <Navbar />
            <Cart />
            <Home />
        </React.Fragment>
     );
}

export default Application;