import React, { Component, useState } from 'react';
import List from './list';

function Search() {
    const data = [
        { id: 1, name: "Audi" },
        { id: 2, name: "Benz" },
        { id: 3, name: "Volvo" },
      ];
    let [carname, setCarname] = useState("santro")
    const [importedCars, setimportedCars] = useState(data);
    return ( 
        <div>
            <h1>Who lives in my garage? </h1>
            <button onClick={()=>setCarname("hyundai")}>change car</button>
            <List cars={importedCars}/>
        </div>
     );

}

export default Search;