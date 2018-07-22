import React, { Component } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


class ContactUs extends Component {
  render() {
    return (
        <div style={style.container}className="ContactUs">
       <Header style={style.myHeader} pageName="Contact Us"/>
         <Footer />
        </div>
    );
  }
}

export default ContactUs;

const style ={

  container: {
    padding: 0,
    boxSizing: 'border-box',
    backgroundImage: ' url(' + require('../images/Books_1.jpg') + ')',
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