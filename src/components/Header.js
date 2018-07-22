import React, { Component } from 'react';
import Nav from './Nav'


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div style={style.container}>
        <Nav style={style.myNav} />
        <h1 style={style.myH1}>{this.props.pageName}</h1>
        </div>


      

      </div>
    );
  }
}

export default Header;

const style={
  container: {
    backgroundColor: 'rgb(161, 214, 226, 0.7)',
    oppacity: '0.6',
    width: '1200px',
    margin: '0 auto'
  },
  myNav:{
    flex: 1,
    justifyContent: 'center',
  },
  myH1:{
    paddingLeft: '20px',
  }
}
