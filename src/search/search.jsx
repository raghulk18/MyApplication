import React, { Component, useState } from 'react';
import List from './list';

function Search() {

    let [carname, setCarname] = useState("santro")
    return ( 
        <div>
            <h1>Who lives in my garage? </h1>
            <List brand={carname} />
        </div>
     );
}

export default Search;