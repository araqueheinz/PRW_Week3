import React, { Component } from 'react';
import Trash from 'react-icons/lib/fa/trash';

class BookList extends Component {
  render() {
    return (
      <div className="BookList">
       <li style={styles.listStyle} key={this.props.id} className="list">
        <span>Book Name: {this.props.val.bookName} </span>
        <span>Summary: {this.props.val.bookSummary} </span>
        <span>Price: ${this.props.val.price} </span>
        <button style={styles.buttonStyle}className="" onClick={this.props.delMe}><Trash/></button>
      </li>
      </div>
    );
  }
}

export default BookList;

const styles = {
   
    listStyle: {
        padding: '5px',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(1200px/4)',
        backgroundColor: 'rgb(188, 186, 190, 0.7)',
        borderRadius: '10px',
        marginTop: '20px'
    },
    buttonStyle: {
        width: 50,
        marginTop: 10,
    },

}