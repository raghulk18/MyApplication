import React from 'react';
import Cart from './components/cart/cart';
import Navbar from './components/navbar/navbar';
import AppRouter from './router';

function Application() {
    return ( 
        <React.Fragment>
            <div className="w-100 m-0 position-relative row">
                <div className="col-3 p-0">
                    <Navbar />
                </div> 
                <div className="col-9 p-0">
                    <AppRouter/>
                </div> 
                <Cart/>               
            </div>
        </React.Fragment>
     );
}

export default Application;