import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <nav className="">
                <NavLink style={style.myNavLink} to="/Home">Home</NavLink>
                <NavLink style={style.myNavLink} to="/MoreBooks">More Books</NavLink>
                <NavLink  style={style.myNavLink} to="/ContactUs">Contact Us</NavLink>
            </nav>
        )
    }
}

export default Nav;

const style={
    myNavLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    paddingRigth: '20px',
    paddingLeft: '20px',
  }

}