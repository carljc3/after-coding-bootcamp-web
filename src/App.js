import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "./pages/Home"
import Portfolio from './pages/Portfolio'
import Navbar from "./components/NavBar"

 const App=()=> 
(
   <Router>
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path = "/portfolio" component = {Portfolio}/>
   </Router>
  );

export default App;
