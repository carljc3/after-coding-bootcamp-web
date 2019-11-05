import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from "./pages/Home"
import Portfolio from './pages/Portfolio'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from "./components/NavBar"

 const App=()=> 
(
   <Router>
     <Navbar/>
     <Route exact path="/" component={Home}/>
     <Route exact path = "/portfolio" component = {Portfolio}/>
     <Route exact path = "/login" component = {Login}/>
     <Route exact path = "/signup" component = {Signup}/>
   </Router>

  );

export default App;