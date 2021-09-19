import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Contacts from "./Components/Contacts/Contacts";
import Home from "./Components/Home/Home";
import Stocks from "./Components/Stocks/Stocks";
import AboutUs from "./Components/AboutUs/AboutUs";
import Sign from "./Components/Sign/Sign";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Basket from "./Components/Basket/Basket";
import './App.css'

function App() {
  return (
    <div className='mainScreen'>
    <Header /> 
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/' component={Menu}/>
      <Route exact path='/contacts' component={Contacts}/>
      <Route exact path='/stocks' component={Stocks}/>
      <Route exact path='/aboutUs' component={AboutUs}/>
      <Route exact path='/signIn' component={Sign}/>
      <Route exact path='/basket' component={Basket}/>
    </Switch> 
    <Footer/>   
    </div>
  );
}

export default App;
