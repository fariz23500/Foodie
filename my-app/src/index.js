import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import Card from './components/Card';
import Hello from "./components/Data";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import BestDishes from "./components/BestDishes";



ReactDOM.render(
  
<Router>
<Route exact path="/">
<App/>

</Route>
<Route exact path="/best-dishes">
<BestDishes/>


</Route>

</Router>


,
  document.getElementById('root')
);


