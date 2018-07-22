import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


class MoreBooks extends Component {
  render() {
    return (
        <div style={style.container} className="MoreBooks">
        <Header style={style.myHeader} pageName="More Books"/>
        
         <Footer />
        </div>
    );
  }
}

export default MoreBooks;


const style ={

  container: {
    padding: 0,
    boxSizing: 'border-box',
    backgroundImage: ' url(' + require('../images/Books_2.jpg') + ')',
    backgroundSize: 'cover',
    width: '1200px',
    height: '1200px',
    margin: '0 auto',
    display: 'flex',
  },
  myHeader: {
    padding: '10px',
  }
}