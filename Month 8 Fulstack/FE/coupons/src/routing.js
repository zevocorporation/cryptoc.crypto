import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Header from './layout/header'
import Login from './user/login'
import Home from "./home/home"
import Profile from "./user/profile"
import Details from "./details/details"
import Validator from "./couponvalidator/validator"


const Routing = () => {
  return(
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/details/:id" component={Details}/>
      <Route path="/validate" component={Validator}/>
    </BrowserRouter>
  )
}

export default Routing