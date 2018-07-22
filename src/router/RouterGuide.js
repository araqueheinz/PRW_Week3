import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'

class RouterGuide extends Component{
    render(){
        return(
        <div className="">

             <Route exact path='/' component={SignIn}/> 
             <Route exact path='/Home' component={Home}/>

        </div>

        )

    }
}

export default RouterGuide;
