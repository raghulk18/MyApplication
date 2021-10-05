import React from "react";
import reactDom from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";

import App from "./App";
import Search from "./search/search";
import Application from "./cafe/application";


reactDom.render(<Application/>, document.getElementById('root'))