import React, { Component } from 'react';
import '../styles/Contact.scss'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

class Contact extends Component {

  render() {
    return (
      <div className='contact-container whiteText'>
        <h1 id='contact' className='textHeader'>STAY CONNECTED</h1>
        <a className='link' href='https://www.linkedin.com/in/laura-wong/' target="_blank" rel="noopener noreferrer"> <FaLinkedinSquare size={30}/> </a>
      </div>
    );
  }
}

export default Contact;