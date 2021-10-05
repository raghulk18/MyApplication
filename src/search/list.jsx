import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';



function List(props) {


    useEffect(() => {
        console.log("props useeffect", props)

      });
      console.log("props new", props)


    return ( 
        <div>
            {/* <h2>my car name is {cars.name}</h2> */}
            
            <div>
               {props.cars.map(p => (
                   <div key={p.id}>{p.name}</div>
               ))}
            </div>
        </div>
     );
}

export default List;