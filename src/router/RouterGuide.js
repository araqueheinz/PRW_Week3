import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import MoreBooks from '../pages/MoreBooks'
import ContactUs from '../pages/ContactUs'

class RouterGuide extends Component{
    render(){
        return(
        <div className="">

             <Route exact path='/' component={SignIn}/> 
             <Route exact path='/Home' component={Home}/>
             <Route exact path='/MoreBooks' component={MoreBooks}/>
             <Route exact path='/ContactUs' component={ContactUs}/>

        </div>

        )

    }
}

export default RouterGuide;
