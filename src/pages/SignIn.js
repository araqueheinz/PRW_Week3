import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SignIn extends Component {

  verifyUser = element =>{
    element.preventDefault()
    alert('Hello!')

  }
  render() {

    return (
      <div className="SignIn" style={style.container}>
      
        <form style={style.myForm}>
          <p>
            <label style={style.myLabel} >Username</label>
            <input style={style.myInput} type="text" name="username" value="student" />
          </p>
          <p>
            <label style={style.myLabel}>Password</label>
            <input style={style.myInput} type="text" name="password" value="fullsail" />
          </p>
          <button type="submit"style={style.myButton}><NavLink style={style.myNavLink} to="/Home">Sign In</NavLink></button>
        </form>
      
      </div>
    );
  }
}

export default SignIn;


const style ={
  container: {
    padding: 0,
    boxSizing: 'border-box',
    backgroundImage: ' url(' + require('../images/Lib_1.jpg') + ')',
    backgroundSize: 'cover',
    width:'1200px',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  myForm:{
    backgroundColor: 'rgba(235, 220, 178, 0.8)',
    borderRadius: '10px',
    width: '180px',
    height: '180px',  
  },
  myLabel: {
    paddingLeft: '10px',
  },
  myInput: {
    marginLeft: '10px',
    width: '130px'
  },
  myButton: {
    marginLeft: '10px',
  },
  myNavLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  }
}