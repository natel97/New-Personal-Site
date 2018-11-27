import React from 'react'
import './contact.css';
import Email from '../assets/Email.svg';
import Facebook from '../assets/Facebook.svg';
import LinkedIn from '../assets/LinkedIn.png';

export default () => (
  <div className='contact'>
    <a href='https://facebook.com/natelubitz'><img src={Facebook} alt='Facebook' /></a>
    <a href='https://www.linkedin.com/in/nathanial-lubitz-472b54130' alt='LinkedIn'><img src={LinkedIn} /> </a>
    <a href='mailto:nate.lubitz@gmail.com'><img src={Email} alt='Email' /></a>
  </div>
)
